import { AlignContent, AlignItems, AlignSelf, BoxSizing, Display, Flex, FlexDirection, FlexGrow, FlexShrink, FlexWrap, JustifyContent, JustifyItems, JustifySelf, MarginUtility, ObjectFit, Overflow, PaddingUtility, Position, Size, TextAlign, UtilityPropsKeys } from "../types";
import type { CSSObject } from "@emotion/serialize";
import { valueToArr } from "./tupleUtils";

type PresetMapValue<V> = CSSObject | ((value: V) => CSSObject);
type PresetMap<T> = {
  [P in keyof T]: PresetMapValue<T[P]>;
}

export const displayMap: PresetMap<Display> = {
  block: { display: "block" },
  "inline-block": { display: "inline-block" },
  inline: { display: "inline" },
  flex: { display: "flex" },
  "inline-flex": { display: "inline-flex" },
  table: { display: "table" },
  "inline-table": { display: "inline-table" },
  "table-caption": { display: "table-caption" },
  "table-cell": { display: "table-cell" },
  "table-column": { display: "table-column" },
  "table-column-group": { display: "table-column-group" },
  "table-footer-group": { display: "table-footer-group" },
  "table-header-group": { display: "table-header-group" },
  "table-row-group": { display: "table-row-group" },
  "table-row": { display: "table-row" },
  "flow-root": { display: "flow-root" },
  grid: { display: "grid" },
  "inline-grid": { display: "inline-grid" },
  contents: { display: "contents" },
  "list-item": { display: "list-item" },
  hidden: { display: "none" }
}

export const objectFitMap: PresetMap<ObjectFit> = {
  "object-contain": { objectFit: "contain" },
  "object-cover": { objectFit: "cover" },
  "object-fill": { objectFit: "fill" },
  "object-none": { objectFit: "none" },
  "object-scale-down": { objectFit: "scale-down" }
}

export const positionMap: PresetMap<Position> = {
  static: { position: "static" },
  absolute: { position: "absolute" },
  relative: { position: "relative" },
  sticky: { position: "sticky" },
  fixed: { position: "fixed" }
}

export const sizeMap: PresetMap<Size> = {
  "h-full": { height: "100%" },
  "w-full": { width: "100%" },
}

export const boxSizingMap: PresetMap<BoxSizing> = {
  "box-border": { boxSizing: "border-box" },
  "box-content": { boxSizing: "content-box" },
}

export const flexDirectionMap: PresetMap<FlexDirection> = {
  "flex-row": { flexDirection: "row" },
  "flex-row-reverse": { flexDirection: "row-reverse" },
  "flex-col": { flexDirection: "column" },
  "flex-col-reverse": { flexDirection: "column-reverse" }
}

export const flexWrapMap: PresetMap<FlexWrap> = {
  "flex-wrap": { flexWrap: "wrap" },
  "flex-wrap-reverse": { flexWrap: "wrap-reverse" },
  "flex-nowrap": { flexWrap: "nowrap" }
}

export const flexMap: PresetMap<Flex> = {
  "flex-1": { flex: "1 1 0%" },
  "flex-auto": { flex: "1 1 auto" },
  "flex-initial": { flex: "0 1 auto" },
  "flex-none": { flex: "none" }
}

export const flexGrow: PresetMap<FlexGrow> = {
  grow: { flexGrow: 1 },
  "grow-0": { flexGrow: 0 }
}

export const flexShrink: PresetMap<FlexShrink> = {
  shrink: { flexShrink: 1 },
  "shrink-0": { flexShrink: 0 }
}

export const justifyContentMap: PresetMap<JustifyContent> = {
  "justify-normal": { justifyContent: "normal" },
  "justify-start": { justifyContent: "flex-start" },
  "justify-end": { justifyContent: "flex-end" },
  "justify-center": { justifyContent: "center" },
  "justify-between": { justifyContent: "space-between" },
  "justify-around": { justifyContent: "space-around" },
  "justify-evenly": { justifyContent: "space-evenly" },
  "justify-stretch": { justifyContent: "stretch" }
}

export const justifyItemsMap: PresetMap<JustifyItems> = {
  "justify-items-start": { justifyItems: "start" },
  "justify-items-end": { justifyItems: "end" },
  "justify-items-center": { justifyItems: "center" },
  "justify-items-stretch": { justifyItems: "stretch" }
}

export const justifySelfMap: PresetMap<JustifySelf> = {
  "justify-self-auto": { justifySelf: "auto" },
  "justify-self-start": { justifySelf: "start" },
  "justify-self-end": { justifySelf: "end" },
  "justify-self-center": { justifySelf: "center" },
  "justify-self-stretch": { justifySelf: "stretch" }
}

export const alignContentMap: PresetMap<AlignContent> = {
  "content-normal": { alignContent: "normal" },
  "content-center": { alignContent: "center" },
  "content-start": { alignContent: "flex-start" },
  "content-end": { alignContent: "flex-end" },
  "content-between": { alignContent: "space-between" },
  "content-around": { alignContent: "space-around" },
  "content-evenly": { alignContent: "space-evenly" },
  "content-baseline": { alignContent: "baseline" },
  "content-stretch": { alignContent: "stretch" }
}

export const alignItemsMap: PresetMap<AlignItems> = {
  "items-start": { alignItems: "flex-start" },
  "items-end": { alignItems: "flex-end" },
  "items-center": { alignItems: "center" },
  "items-baseline": { alignItems: "baseline" },
  "items-stretch": { alignItems: "stretch" }
}

export const alignSelfMap: PresetMap<AlignSelf> = {
  "self-auto": { alignSelf: "auto" },
  "self-start": { alignSelf: "flex-start" },
  "self-end": { alignSelf: "flex-end" },
  "self-center": { alignSelf: "center" },
  "self-stretch": { alignSelf: "stretch" },
  "self-baseLine": { alignSelf: "baselines" }
}

export const overflowMap: PresetMap<Overflow> = {
  "overflow-auto": { overflow: "auto" },
  "overflow-hidden": { overflow: "hidden" },
  "overflow-clip": { overflow: "clip" },
  "overflow-visible": { overflow: "visible" },
  "overflow-scroll": { overflow: "scroll" },
  "overflow-x-auto": { overflowX: "auto" },
  "overflow-y-auto": { overflowY: "auto" },
  "overflow-x-hidden": { overflowX: "hidden" },
  "overflow-y-hidden": { overflowY: "hidden" },
  "overflow-x-clip": { overflowX: "clip" },
  "overflow-y-clip": { overflowY: "clip" },
  "overflow-x-visible": { overflowX: "visible" },
  "overflow-y-visible": { overflowY: "visible" },
  "overflow-x-scroll": { overflowX: "scroll" },
  "overflow-y-scroll": { overflowY: "scroll" }
}

export const textAlign: PresetMap<TextAlign> = {
  "text-justify": { textAlign: "justify" },
  "text-start": { textAlign: "start" },
  "text-end": { textAlign: "end" },
  "text-center": { textAlign: "center" }
}
const numReg = /^[0-9]+(\.[0-9]+)?$/;
function tryToNumber(n: string | number): number | string {
  let tryN = parseFloat(n as string)
  return !Number.isNaN(tryN) && numReg.test(n.toString()) ? tryN : n
}

function tryStringArrToNumber(arr: (string | number)[]): (number | string)[] {
  return arr.map(n => tryToNumber(n))
}

export const marginMap: PresetMap<MarginUtility> = {
  mx: (mx) => {
    let [marginLeft, marginRight] = tryStringArrToNumber(valueToArr(mx))
    return { marginLeft, marginRight }
  },
  ml: (marginLeft) => ({ marginLeft: tryToNumber(marginLeft) }),
  mr: (marginRight) => ({ marginRight: tryToNumber(marginRight) }),
  my: (my) => {
    let [marginTop, marginBottom] = tryStringArrToNumber(valueToArr(my))
    return { marginTop, marginBottom }
  },
  mt: (marginTop) => ({ marginTop: tryToNumber(marginTop) }),
  mb: (marginBottom) => ({ marginBottom: tryToNumber(marginBottom) }),
}

export const paddingMap: PresetMap<PaddingUtility> = {
  px: (px) => {
    let [paddingLeft, paddingRight] = tryStringArrToNumber(valueToArr(px))
    return { paddingLeft, paddingRight }
  },
  pl: (paddingLeft) => ({ paddingLeft: tryToNumber(paddingLeft) }),
  pr: (paddingRight) => ({ paddingRight: tryToNumber(paddingRight) }),
  py: (py) => {
    let [paddingTop, paddingBottom] = tryStringArrToNumber(valueToArr(py))
    return { paddingTop, paddingBottom }
  },
  pt: (paddingTop) => ({ paddingTop: tryToNumber(paddingTop) }),
  pb: (paddingBottom) => ({ paddingBottom: tryToNumber(paddingBottom) }),
}

export const presetMap: Record<UtilityPropsKeys, PresetMapValue<any>> = Object.assign({},
  displayMap,
  objectFitMap,
  positionMap,
  sizeMap,
  boxSizingMap,
  flexDirectionMap,
  flexWrapMap,
  flexMap,
  flexGrow,
  flexShrink,
  justifyContentMap,
  justifyItemsMap,
  justifySelfMap,
  alignContentMap,
  alignItemsMap,
  alignSelfMap,
  overflowMap,
  textAlign,
  marginMap,
  paddingMap
)
