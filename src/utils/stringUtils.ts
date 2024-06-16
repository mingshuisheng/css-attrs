const kebabReg = /-(\w)/g
export function kebabToCamel(str: string): string {
  return str.replace(kebabReg, (_, $1: string) => $1.toUpperCase())
}