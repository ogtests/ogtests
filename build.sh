#!/bin/zsh
rm -rf ./dist
mkdir ./dist
cp -r assets dist
npx ts-node ./src/index.ts
git add ./dist && git commit -m "Generate pages [$(date -Iminutes)]"
git subtree push --prefix=dist origin gh-pages