#! /usr/bin/env -S deno -A
import { async_transformCode, system } from "../npm-module/esm/mod.js";

var lispCode = `
(console.log 123)
#|@
var xyz = "XYZ";
console.log(<string>xyz={{xyz}}<string>);
console.log($system.cwd());
|#
(defun add3 (a b c) (+ a b c))
`;
var jsCode = await async_transformCode(lispCode, "transformed.mjs");
// system.saveText("transformed.js", jsCode);
await system.async_run(["ls", "-lh", "./transformed.mjs"]);
