import { assert } from "@std/assert";
import { lisp, version, versionNumber, system } from "./mod.js";

Deno.test("test#01", async () => {
  try {
    console.log(system.cwd());
    system.mkdir("./tmp/abc/xyz");
    system.saveText("./tmp/abc/xyz.txt", "helloハロー©");
    await system.async_run(["ls", "-l", "./tmp/abc"]);
    assert(system.loadText("./tmp/abc/xyz.txt") == "helloハロー©");
  } finally {
    system.remove("./tmp");
  }
});

Deno.test("test#02", async () => {
  try {
    const scope = lisp(globalThis);
    scope.run(
      `
(defun add2 (a b) (+ a b))
`);
    const answer = add2(11, 22);
    console.log(`answer=${answer}`);
    assert(answer == 33);
  } finally {
    ;
  }
});

Deno.test("test#03", async () => {
  try {
    const scope = lisp(globalThis);
    scope.run(
      `
#|@
globalThis.xyz <%equal%> 123;
|#

(defun add2 (a b) (<%plus%> a b xyz))
`);
    const answer = add2(11, 22);
    console.log(`answer=${answer}`);
    assert(answer == 156);
  } finally {
    ;
  }
});
