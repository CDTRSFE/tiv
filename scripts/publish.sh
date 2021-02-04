#! /usr/bin/env bash

set -e

cp -r dist/lib/ lib
cp -r dist/styles/ styles
cp -r src/packages/ packages

npm publish

rm -r lib styles packages
