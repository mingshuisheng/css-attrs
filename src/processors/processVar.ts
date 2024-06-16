import { Attr, createVarCss, elementsToAttrs, isVarKey, mutationRecordToAttrs } from "../utils";

export function processVar(mutations: MutationRecord[]) {
  processVarAttrs(mutationRecordToAttrs(mutations, isVarKey))
}

export function firstLoadProcessVar(elements: Element[]) {
  processVarAttrs(elementsToAttrs(elements, isVarKey))
}

export function processVarAttrs(attrs: Attr[]) {
  attrs.filter(attr => !!attr.name)
    .forEach(attr => {
      createVarCss(attr.name, attr.value!);
    })
}