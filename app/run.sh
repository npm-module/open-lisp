#! /usr/bin/env bash
set -uvx
set -e
rm -rf node_modules
#../lisp1/init.sh
npm install
deno run --allow-all ./app-deno.mjs a b "c ハロー©"
node ./app-require.js a b "c ハロー©"
node ./app-import.mjs a b "c ハロー©"
node ./app-transform.mjs
deno -A ./transformed.mjs
deno -A ./user.js
