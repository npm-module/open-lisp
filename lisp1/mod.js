import { existsSync } from "@std/fs";
import { lisp1 } from "./src/lisp1.mjs";

export function lisp($scope) {
  return lisp1($scope, system);
}

export class system {
  static version() {
    return version();
  }
  static lisp() {
    return lisp(...arguments);
  }
  static args() {
    return args();
  }
  static env() {
    return env();
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
  static run(v, ignoreErrors) {
    return run(v, ignoreErrors);
  }
  static runWithOutput(v, ignoreErrors, encoding) {
    return runWithOutput(v, ignoreErrors, encoding);
  }
  static loadText(path) {
    return loadText(path);
  }
  static saveText(path, text) {
    return saveText(path, text);
  }
}

export function version() {
  return "lisp1: version 2026.0306.214909";
}

export function args() {
  return Deno.args;
}

export function env() {
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

export async function run(v, ignoreErrors) {
  // deno-lint-ignore no-deprecated-deno-api
  const p = Deno.run({
    cmd: v,
  });
  const { success, code } = await p.status();
  if (!ignoreErrors && code !== 0) {
    console.log(JSON.stringify(v) + " exit code is " + code);
    throw new Error();
  }
  const result = {};
  result.success = success;
  result.code = code;
  return result;
}

export async function runWithOutput(
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
    console.log(JSON.stringify(v) + " exit code is " + code);
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
