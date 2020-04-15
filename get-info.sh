#!/bin/bash

COMMIT=`git rev-parse --short HEAD`
TAG=`git describe --tags`
BRANCH=`git symbolic-ref HEAD | cut -d/ -f3-`

if [[ $BRANCH == "master" ]]; then
    APPVERSION=$TAG
elif [[ $BRANCH == "dev" ]]; then
    APPVERSION=$COMMIT
elif [[ $BRANCH =~ ^release\/.*$ ]]; then
    APPVERSION=$COMMIT
else
    APPVERSION=$BRANCH
fi

sed -i -e "s|__COMMIT_HASH__|$COMMIT|g" src/app/version.ts
sed -i -e "s|__APP_VERSION__|$APPVERSION|g" src/app/version.ts
sed -i -e "s|__TAG__|$TAG|g" src/app/version.ts
sed -i -e "s|__BRANCH__|$BRANCH|g" src/app/version.ts
