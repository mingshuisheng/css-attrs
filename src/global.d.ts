import { CSSAttributes } from "./libs";

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends CSSAttributes {
    }
  }
}

export { }