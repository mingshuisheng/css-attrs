import { typeKeys } from "type-transform-utils"
import { CombineProps } from "../types"
import { isVarKey } from "./isVarKey";

export const styleKeys = typeKeys<CombineProps>()

const styleKeyReg = styleKeys.map((key) => RegExp(`^(.+:${key}|${key}$)`));
export const isStyleKey = (key: string) => !isVarKey(key) && styleKeyReg.some((reg) => reg.test(key));