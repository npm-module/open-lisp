import { assert } from "@std/assert";
import * as sys from "./mod.js";

Deno.test("test#01", async () => {
  try {
    console.log(sys.cwd());
    sys.mkdir("./tmp/abc/xyz");
    sys.saveText("./tmp/abc/xyz.txt", "helloハロー©");
    await sys.run(["ls", "-l", "./tmp/abc"]);
    assert(sys.loadText("./tmp/abc/xyz.txt") == "helloハロー©");
  } finally {
    sys.remove("./tmp");
  }
});
