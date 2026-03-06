#! /usr/bin/env -S deno -A
import transformed from "./transformed.js";

var scope=transformed(globalThis);
console.log(add3(100, 200, 300));
console.log(scope.add3(10, 20, 30));
