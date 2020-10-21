#!/bin/bash

COMMIT=`git rev-parse --short HEAD`
TAG=`git describe --tags`
BRANCH=$TRAVIS_BRANCH

if [[ $TAG =~ ^v.*$ ]]; then
  BRANCH="master"
elif [[ $TAG =~ ^deploy.*$ ]]; then
  BRANCH="dev deploy"
elif [[ $BRANCH == "develop" ]]; then
  BRANCH="develop"
else
  BRANCH=`git symbolic-ref HEAD | cut -d/ -f3-`
fi

if [[ $BRANCH == "master" ]]; then
    APPVERSION=$TAG
elif [[ $BRANCH == "develop" ]]; then
    APPVERSION=$COMMIT
elif [[ $BRANCH =~ ^release\/.*$ ]]; then
    APPVERSION=$COMMIT
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
