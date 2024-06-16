import type { StyleProps } from "./styleProps.ts";

export interface StyleVarProps {
  [key: `var:${string}`]: string;
}

export interface CSSAttributes extends StyleProps, StyleVarProps {
}
