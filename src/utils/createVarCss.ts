import { css } from "../css";

const insertedVar = new Set<string>();
export function createVarCss(key: string, realValue: string) {
  const selector = `[${key}="${realValue}"]`;
  if (insertedVar.has(selector)) {
    return;
  }
  insertedVar.add(selector);
  try {
    css({ [`${key.replace("var:", "--")}`]: realValue }, selector);
  } catch (e) {
    console.error(e);
  }
}
