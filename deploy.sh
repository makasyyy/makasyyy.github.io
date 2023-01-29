#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
pnpm build

# 进入待发布的目录
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
 git push -f git@github.com:makasyyy/makasyyy.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -

#删除 dist文件夹
rm -rf docs/.vitepress/dist
# 是否关闭命令行窗口
exec /bin/bash