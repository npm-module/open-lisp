#! /usr/bin/env -S deno -A
import { transformCode, system } from "../npm-module/esm/mod.js";

var lispCode = `
(console.log 123)
#|@
var xyz = "XYZ"::
console.log(<string>xyz={{xyz}}<string>)::
console.log($system.cwd())::
|#
(defun add3 (a b c) (+ a b c))
`;
var jsCode = transformCode(lispCode, "transformed.mjs");
await system.async_run(["ls", "-lh", "./transformed.mjs"]);
