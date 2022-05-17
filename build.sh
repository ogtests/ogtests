#!/bin/zsh
rm -rf ./dist
mkdir ./dist
cp -r assets dist
npx ts-node ./src/index.ts
git add . && git commit -m "Generate pages [$(date -Iminutes)]"