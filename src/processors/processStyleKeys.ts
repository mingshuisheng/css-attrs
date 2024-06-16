import { Attr, createCss, elementsToAttrs, isStyleKey, mutationRecordToAttrs } from "../utils";

export function processStyleKeys(mutations: MutationRecord[]) {
  processAttrStyle(mutationRecordToAttrs(mutations, isStyleKey))
}

export function firstLoadProcessStyleKeys(elements: Element[]) {
  processAttrStyle(elementsToAttrs(elements, isStyleKey))
}

export function processAttrStyle(attrs: Attr[]) {
  //根据属性创建对应的css
  attrs
    .forEach((attr) => {
      createCss(attr.name, attr.value ?? "true");
    });
}