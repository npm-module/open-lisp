#! /usr/bin/env -S deno -A
import { lisp, system as sys } from "../npm-module/esm/mod.js";

console.log(sys.version());
console.log(sys.versionNumber());
console.log(sys.cwd());
console.log(sys.exists("c:/Windows/notepad.exe"));
await sys.async_run(["ls", "-ltr"]);
console.log(sys.args());

function add2(a, b) { return a + b; }
globalThis.add2 = add2;

var scope1 = lisp(globalThis);
scope1.run(`
(console.log ($system.args))
(console.log (add2 11 22))
`);
var scope2 = lisp({add2:add2});
scope2.run(`
(console.log ($system.args))
(console.log ($scope.add2 111 222))
`);
