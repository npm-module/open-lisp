import { existsSync } from "@std/fs";
import prettier from "npm:prettier@3.8.1";
import { lisp1 } from "./src/lisp1.mjs";

export function lisp($scope, $system) {
  if (typeof $system === "undefined") {
    $system = system;
  }
  return lisp1($scope, $system);
}

export async function async_prettier(code) {
  const formatted = await prettier.format(code, {
    parser: "babel",
    semi: true,
    singleQuote: false,
  });
  return formatted;
}

export async function async_transformCode(lispCode, _pathToLispCode) {
  const lisp = lisp1({}, system);
  const rawJS = lisp.compile(lispCode).trim();
  const jscode = `
  import { lisp } from "npm:open-lisp@${versionNumber()}";
  function transformed(\$scope) {
    const $_scope_$ = lisp($scope);
    $_scope_$.evalJS(\`${
    rawJS
      .replace(/\\/g, "\\\\")
      .replace(/[$][{]/g, "\\${")
      .replace(/`/g, "\\`")
  }\`);
    return $_scope_$;
  }
  export default transformed;
  if (import.meta.main) {
    transformed(globalThis);
  }
`;
  const beautified = await async_prettier(jscode);
  if (_pathToLispCode) {
    saveText(_pathToLispCode, beautified);
    console.error(`<SCRIPT>\n${beautified.trimEnd()}\n</SCRIPT>`);
    console.error(
      `[open-lisp] Transformed your code and saved to ${_pathToLispCode}.`,
    );
  }
  return beautified;
}

export class system {
  static version() {
    return version();
  }
  static versionNumber() {
    return versionNumber();
  }
  static lisp() {
    return lisp(...arguments);
  }
  static args() {
    return args();
  }
  static allEnv() {
    return allEnv();
  }
  static getEnv() {
    return getEnv(...arguments);
  }
  static setEnv() {
    return setEnv(...arguments);
  }
  static hasEnv() {
    return hasEnv(...arguments);
  }
  static deleteEnv() {
    return deleteEnv(...arguments);
  }
  static chdir(path) {
    return chdir(path);
  }
  static cwd() {
    return cwd();
  }
  static exists(path) {
    return exists(path);
  }
  static mkdir(path) {
    return mkdir(path);
  }
  static remove(path) {
    return remove(path);
  }
  static async_run(v, ignoreErrors) {
    return async_run(v, ignoreErrors);
  }
  static async_runWithOutput(v, ignoreErrors, encoding) {
    return async_runWithOutput(v, ignoreErrors, encoding);
  }
  static loadText(path) {
    return loadText(path);
  }
  static saveText(path, text) {
    return saveText(path, text);
  }
}

export function version() {
  return "npm:open-lisp: version 2026.308.130551";
}

export function versionNumber() {
  const split = version().split(" ");
  return split[2];
}

export function args() {
  return Deno.args;
}

export function allEnv() {
  return Deno.env.toObject();
}

export function getEnv() {
  return Deno.env.get(...arguments);
}

export function setEnv() {
  return Deno.env.set(...arguments);
}

export function hasEnv() {
  return Deno.env.has(...arguments);
}

export function deleteEnv() {
  return Deno.env.delete(...arguments);
}

export function chdir(path) {
  return Deno.chdir(path);
}

export function cwd() {
  return Deno.cwd();
}

export function exists(path) {
  try {
    return existsSync(path);
  } catch (_e) {
    return false;
  }
}

export function mkdir(path) {
  return Deno.mkdirSync(path, { recursive: true });
}

export function remove(path) {
  return Deno.removeSync(path, { recursive: true });
}

export async function async_run(v, ignoreErrors) {
  // deno-lint-ignore no-deprecated-deno-api
  const p = Deno.run({
    cmd: v,
  });
  const { success, code } = await p.status();
  if (!ignoreErrors && code !== 0) {
    console.error(JSON.stringify(v) + " exit code is " + code);
    throw new Error();
  }
  const result = {};
  result.success = success;
  result.code = code;
  return result;
}

export async function async_runWithOutput(
  v,
  ignoreErrors,
  encoding,
) {
  if (encoding == null) encoding = "utf-8";
  // deno-lint-ignore no-deprecated-deno-api
  const p = Deno.run({
    cmd: v,
    stdout: "piped",
    stderr: "piped",
  });
  const { success, code } = await p.status();
  const result = {};
  if (!ignoreErrors && code !== 0) {
    console.error(JSON.stringify(v) + " exit code is " + code);
    throw new Error();
  }
  result.success = success;
  result.code = code;
  const rawOutput = await p.output();
  result.stdout = new TextDecoder(encoding).decode(rawOutput);
  const rawError = await p.stderrOutput();
  result.stderr = new TextDecoder(encoding).decode(rawError);
  return result;
}

export function loadText(path) {
  return Deno.readTextFileSync(path);
}

export function saveText(path, text) {
  return Deno.writeTextFileSync(path, text);
}
