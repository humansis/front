#!/bin/bash

# first parameter: environment to deploy to [prod, test, dev, stage and demo]

#immediately exits if a command exits with an non-zero status
set -e

# build the project (contents will be in directory dist/bms-front)
echo "Build starting"
if [[ $1 == "prod" ]]; then
    yarn run build -- --prod --progress
elif [[ $1 == "test" ]]; then
    yarn run build -- --prod -c testing --progress
elif [[ $1 == "dev" ]]; then
    yarn run build -- --prod -c develop --progress
elif [[ $1 == "stage" ]]; then
    yarn run build -- --prod -c stage --progress
elif [[ $1 == "demo" ]]; then
    echo "Demo environment is not currently supported."
    exit 0
    yarn run build -- --prod -c demo --progress
elif [[ $1 == "proddca" ]]; then # DCA
    cp src/environments/environment.template.ts src/environments/environment.prod.ts
    sed -i -e "s|__API_URL__|${API_URL_DCA_PROD}|g" src/environments/environment.prod.ts
    yarn run build -- --prod --progress
elif [[ $1 == "testdca" ]]; then # DCA
    cp src/environments/environment.template.ts src/environments/environment.prod.ts
    sed -i -e "s|__API_URL__|${API_URL_DCA_TEST}|g" src/environments/environment.prod.ts
    yarn run build -- --prod --progress
else
    echo "Unknown environment"
    exit 1
fi
echo "Build complete"

# gzip up all files so that they are smaller
echo "Compression starting"
rm -Rf dist/bms-front_gzip/
cp -R dist/bms-front/ dist/bms-front_gzip/
gzip -9fr dist/bms-front_gzip/
FILES=`find dist/bms-front_gzip`
for FILE in $FILES; do
    NEW_FILE=${FILE/.gz/}
    echo $NEW_FILE
    if [ "${FILE}" != "${NEW_FILE}" ]; then
        mv ${FILE} ${NEW_FILE}
    fi;
done;
echo "Compression complete"

# deploy on aws
echo "Upload starting"
# aws configure set aws_access_key_id ${aws_access_key_id}
# aws configure set aws_secret_access_key ${aws_secret_access_key}
# aws configure set default.region eu-central-1

if [[ $1 == "prod" ]]; then
    aws s3 rm s3://pin.humansis.org --recursive
    aws s3 cp ./dist/bms-front_gzip s3://pin.humansis.org --recursive --acl public-read --content-encoding gzip
    aws cloudfront create-invalidation --distribution-id E2CS9FD9XA4VY8 --paths '/*'
elif [[ $1 == "test" ]]; then
    aws s3 rm s3://test.humansis.org --recursive
    aws s3 cp ./dist/bms-front_gzip s3://test.humansis.org --recursive --acl public-read --content-encoding gzip
    aws cloudfront create-invalidation --distribution-id ELILCCWXYP760 --paths '/*'
elif [[ $1 == "dev" ]]; then
    aws s3 rm s3://dev.humansis.org --recursive
    aws s3 cp ./dist/bms-front_gzip s3://dev.humansis.org --recursive --acl public-read --content-encoding gzip
    aws cloudfront create-invalidation --distribution-id E1FDBGHL3DD0Y8 --paths '/*'
elif [[ $1 == "stage" ]]; then
    aws s3 rm s3://stage.humansis.org --recursive
    aws s3 cp ./dist/bms-front_gzip s3://stage.humansis.org --recursive --acl public-read --content-encoding gzip
    aws cloudfront create-invalidation --distribution-id E32V5GMMFAUJ37 --paths '/*'
elif [[ $1 == "demo" ]]; then
    aws s3 rm s3://demo.humansis.org --recursive
    aws s3 cp ./dist/bms-front_gzip s3://demo.humansis.org --recursive --acl public-read --content-encoding gzip
    aws cloudfront create-invalidation --distribution-id EETRVGJ9FHCMD --paths '/*'
elif [[ $1 == "proddca" ]]; then # DCA
    aws s3 rm s3://dca.humansis.org --recursive
    aws s3 cp ./dist/bms-front_gzip s3://dca.humansis.org --recursive --acl public-read --content-encoding gzip
    aws cloudfront create-invalidation --distribution-id EZBP52LVPFT1C --paths '/*'
elif [[ $1 == "testdca" ]]; then # DCA
    aws s3 rm s3://testdca.humansis.org --recursive
    aws s3 cp ./dist/bms-front_gzip s3://testdca.humansis.org --recursive --acl public-read --content-encoding gzip
    aws cloudfront create-invalidation --distribution-id E3RNPDVEF9KF64 --paths '/*'
fi
echo "Upload complete"
