import { firstLoad } from "./init";
import { enablePropsStyle } from "./observer";

export * from "./components";
export * from "./css";
export * from "./processors";
export * from "./types";
export * from "./utils";
export * from "./observer"

export function useCssAttrs() {
  firstLoad()
  enablePropsStyle()
}