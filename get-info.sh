#!/bin/bash

COMMIT=`git rev-parse --short HEAD`
TAG=`git describe --tags`
BRANCH=$TRAVIS_BRANCH

if [[ $BRANCH =~ ^v.*$ ]]; then
  TAG=$BRANCH
  BRANCH="master"
elif [[ $BRANCH =~ ^deploy.*$ ]]; then
  TAG=$BRANCH
  BRANCH="dev deploy"
elif [[ $BRANCH == "develop" ]]; then
  BRANCH="develop"
fi

if [[ $BRANCH == "master" ]]; then
    APPVERSION=$TAG
elif [[ $BRANCH == "develop" ]]; then
    APPVERSION=$COMMIT
elif [[ $BRANCH =~ ^release\/.*$ ]]; then
    VERSION=`echo $BRANCH | sed -e 's/release\///g'`
    APPVERSION=$VERSION-$COMMIT
elif [[ $TAG =~ ^deploy.*$ ]]; then
    APPVERSION=$COMMIT
else
    APPVERSION=$BRANCH
fi

sed -i -e "s|__COMMIT_HASH__|$COMMIT|g" src/app/version.ts
sed -i -e "s|__APP_VERSION__|$APPVERSION|g" src/app/version.ts
sed -i -e "s|__TAG__|$TAG|g" src/app/version.ts
sed -i -e "s|__BRANCH__|$BRANCH|g" src/app/version.ts

cat src/app/version.ts
