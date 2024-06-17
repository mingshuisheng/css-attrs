import { flow } from "./flow.ts";
import { UtilityPropsKeys } from "../types";
import { CSSObject } from "@emotion/serialize";
import { presetMap } from "./presetMap";
import { attrMap } from "./attrMap.ts";
import { css } from "../css";
import { kebabToCamel } from "./stringUtils.ts";

const processStyleSelectors = flow<[string, string]>(
  processDark,
  processPseudoElement,
  processPseudoClass
);

const insertedStyle = new Set<string>();
export function createCss(key: string, realValue: string) {

  const selector: string = `[${key}="${realValue}"]`;
  const [_, realSelector] = processStyleSelectors([key, selector]);
  if (insertedStyle.has(realSelector)) {
    return;
  }
  insertedStyle.add(realSelector);
  let style = processStyle(key, realValue);
  try {
    css(style, realSelector);
  } catch (e) {
    console.error(e);
  }
}

function processDark([key, selector]: [string, string]): [string, string] {
  if (key.includes("dark")) {
    return [key, `.dark ${selector}`];
  }
  return [key, selector];
}

const pseudoClasses = ["hover", "focus", "active"];
function processPseudoClass([key, selector]: [string, string]): [
  string,
  string
] {
  for (const pseudoClass of pseudoClasses) {
    if (key.includes(pseudoClass)) {
      selector = `${selector}:${pseudoClass}`;
    }
  }
  return [key, selector];
}

const pseudoElements = ["before", "after"];

function processPseudoElement([key, selector]: [string, string]): [
  string,
  string
] {
  for (const pseudoElement of pseudoElements) {
    if (key.includes(pseudoElement)) {
      selector = `${selector}::${pseudoElement}`;
    }
  }
  return [key, selector];
}

const presetMapKeys = Object.keys(presetMap)

function processStyle(key: string, value: string): CSSObject {
  const keys = key.split(":");
  let attr = keys[keys.length - 1];
  attr = attrMap[attr] ?? attr;

  if (presetMapKeys.includes(key)) {
    const preset = presetMap[key as UtilityPropsKeys];
    return (typeof preset === "function") ? preset(value) : value == "false" ? {} : preset
  } else {
    return {
      [`${kebabToCamel(attr)}`]: value,
    }
  }
}