import type { Properties } from "csstype";


export interface BaseProps {
  // export interface BaseProps {
  d: Properties["display"];
  h: Properties["height"];
  w: Properties["width"];
  c: Properties["color"];
  bg: Properties["backgroundColor"];
  z: Properties["zIndex"];
  p: Properties["padding"];
  m: Properties["margin"];
  b: Properties["border"];
  br: Properties["borderRadius"];
  shadow: Properties["boxShadow"];
  basis: Properties["flexBasis"];
  top: Properties["top"]
  bottom: Properties["bottom"]
  left: Properties["left"]
  right: Properties["right"]
  inset: Properties["inset"]
  order: Properties["order"]
  "user-select": Properties["userSelect"]
  "object-fit": Properties["objectFit"]
  "box-sizing": Properties["boxSizing"]
  "transition": Properties["transition"]
  "transform": Properties["transform"]
  "filter": Properties["filter"]
  "cursor": Properties["cursor"]
  "gap": Properties["gap"]
  "column-gap": Properties["columnGap"]
  "row-gap": Properties["rowGap"]
  "overflow": Properties["overflow"]
  "opacity": Properties["opacity"]
  "flex-direction": Properties["flexDirection"]
  "grid-template": Properties["gridTemplate"]
  "grid-template-columns": Properties["gridTemplateColumns"]
  "grid-template-rows": Properties["gridTemplateRows"]
  "grid-area": Properties["gridArea"]
  "grid-template-areas": Properties["gridTemplateAreas"]
  "grid-auto-flow": Properties["gridAutoFlow"]
  "grid-auto-rows": Properties["gridAutoRows"]
}