#!/usr/bin/env sh

set -e

cd website/dist

git init
git add -A
git commit -m 'deploy'

# 发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:iamzhaoqing/tiv.git master:gh-pages

cd -
