export type SizeType = number | string;
export type BooleanProps<T extends string> = Record<T, boolean>

export type Display = BooleanProps<
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "table"
  | "inline-table"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row-group"
  | "table-row"
  | "flow-root"
  | "grid"
  | "inline-grid"
  | "contents"
  | "list-item"
  | "hidden"
>

export type ObjectFit = BooleanProps<
  | "object-contain"
  | "object-cover"
  | "object-fill"
  | "object-none"
  | "object-scale-down"
>


export type Position = BooleanProps<
  | "static"
  | "absolute"
  | "relative"
  | "sticky"
  | "fixed"
>


export type Size = BooleanProps<
  | "w-full"
  | "h-full"
>

export type BoxSizing = BooleanProps<
  | "box-border"
  | "box-content"
>

export type FlexDirection = BooleanProps<
  | "flex-row"
  | "flex-row-reverse"
  | "flex-col"
  | "flex-col-reverse"
>

export type FlexWrap = BooleanProps<
  | "flex-wrap"
  | "flex-wrap-reverse"
  | "flex-nowrap"
>

export type Flex = BooleanProps<
  | "flex-1"
  | "flex-auto"
  | "flex-initial"
  | "flex-none"
>

export type FlexGrow = BooleanProps<
  | "grow"
  | "grow-0"
>

export type FlexShrink = BooleanProps<
  | "shrink"
  | "shrink-0"
>

export type JustifyContent = BooleanProps<
  | "justify-normal"
  | "justify-start"
  | "justify-end"
  | "justify-center"
  | "justify-between"
  | "justify-around"
  | "justify-evenly"
  | "justify-stretch"
>

export type JustifyItems = BooleanProps<
  | "justify-items-start"
  | "justify-items-end"
  | "justify-items-center"
  | "justify-items-stretch"
>

export type JustifySelf = BooleanProps<
  | "justify-self-auto"
  | "justify-self-start"
  | "justify-self-end"
  | "justify-self-center"
  | "justify-self-stretch"
>

export type AlignContent = BooleanProps<
  | "content-normal"
  | "content-center"
  | "content-start"
  | "content-end"
  | "content-between"
  | "content-around"
  | "content-evenly"
  | "content-baseline"
  | "content-stretch"
>

export type AlignItems = BooleanProps<
  | "items-start"
  | "items-end"
  | "items-center"
  | "items-baseline"
  | "items-stretch"
>

export type AlignSelf = BooleanProps<
  | "self-auto"
  | "self-start"
  | "self-end"
  | "self-center"
  | "self-stretch"
  | "self-baseLine"
>

export type Overflow = BooleanProps<
  | "overflow-auto"
  | "overflow-hidden"
  | "overflow-clip"
  | "overflow-visible"
  | "overflow-scroll"
  | "overflow-x-auto"
  | "overflow-y-auto"
  | "overflow-x-hidden"
  | "overflow-y-hidden"
  | "overflow-x-clip"
  | "overflow-y-clip"
  | "overflow-x-visible"
  | "overflow-y-visible"
  | "overflow-x-scroll"
  | "overflow-y-scroll"
>

export type TextAlign = BooleanProps<
  | "text-start"
  | "text-end"
  | "text-center"
  | "text-justify"
>


export type MarginUtility = {
  mx: SizeType | [SizeType, SizeType]
  ml: SizeType
  mr: SizeType
  my: SizeType | [SizeType, SizeType]
  mt: SizeType
  mb: SizeType
}

export type PaddingUtility = {
  px: SizeType | [SizeType, SizeType]
  pl: SizeType
  pr: SizeType
  py: SizeType | [SizeType, SizeType]
  pt: SizeType
  pb: SizeType
}

export type InnerUtilityProps =
  Display & ObjectFit & Position & Size & BoxSizing
  & FlexDirection & FlexWrap & Flex & FlexGrow & FlexShrink
  & JustifyContent & JustifyItems & JustifySelf
  & AlignContent & AlignItems & AlignSelf
  & Overflow & TextAlign & MarginUtility & PaddingUtility

export interface UtilityProps extends InnerUtilityProps { }
export type UtilityPropsKeys = keyof UtilityProps;