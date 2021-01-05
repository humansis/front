#!/bin/bash

COMMIT=$CI_COMMIT_SHORT_SHA
TAG=`git describe --tags`
BRANCH=$CI_COMMIT_REF_NAME

if [[ $CI_COMMIT_TAG =~ ^v.*$ ]]; then
  TAG=$CI_COMMIT_TAG
  BRANCH="master"
fi

if [[ $BRANCH == "master" ]]; then
    APPVERSION=$TAG
elif [[ $BRANCH =~ ^release\/.*$ ]]; then
    VERSION=`echo $BRANCH | sed -e 's/release\///g'`
    APPVERSION=$VERSION-$COMMIT
else
    APPVERSION=$COMMIT
fi

sed -i -e "s|__COMMIT_HASH__|$COMMIT|g" src/app/version.ts
sed -i -e "s|__APP_VERSION__|$APPVERSION|g" src/app/version.ts
sed -i -e "s|__TAG__|$TAG|g" src/app/version.ts
sed -i -e "s|__BRANCH__|$BRANCH|g" src/app/version.ts

cat src/app/version.ts
