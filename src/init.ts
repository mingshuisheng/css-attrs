import { firstLoadProcessStyleKeys, firstLoadProcessVar } from "./processors"

const processors = [firstLoadProcessVar, firstLoadProcessStyleKeys]

export function firstLoad() {
  const elements = [...document.body.getElementsByTagName("*")]
  for (const processor of processors) {
    processor(elements)
  }
}