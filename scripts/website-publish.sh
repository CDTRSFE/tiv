#!/usr/bin/env sh

set -e

cd website/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:iamzhaoqing/tiv.git master:gh-pages

cd -
