export type Attr = {
  name: string,
  value: string | null
}

export function mutationRecordToAttrs(mutations: MutationRecord[], keyFilter: (key: string) => boolean = () => true) {
  const addedNodeAttrs = mutations
    .filter((m) => m.type === "childList")
    .filter((m) => m.addedNodes.length) //过滤出添加Node的mutations
    .map((m) => [...m.addedNodes]) // 获取所有添加被添加的Nodes
    .flat()
    //排除非标签节点，比如#text
    .filter(node => node.nodeType === Node.ELEMENT_NODE)
    .map(node => { //因为添加节点有可能仅包含子孙节点，所以这里要把所有子节点都铺平
      const el = node as HTMLElement;
      return [el, ...el.getElementsByTagName("*")]
    }).flat()
    .map(element => elementToAttrs(element, keyFilter)).flat() //分解并过滤出节点中的attribute

  const changedAttrs = mutations
    .filter((m) => m.type === "attributes") //过滤出修改attributes的mutations
    .filter((m) => m.attributeName && keyFilter(m.attributeName)) //只需要是style的attribute
    .map((m) => ({
      name: m.attributeName!,
      value: (m.target as HTMLElement).getAttribute(m.attributeName!),
    })); // 获取attr名称以及值
  return addedNodeAttrs.concat(changedAttrs)
}

export function elementToAttrs(element: Element, keyFilter: (key: string) => boolean = () => true): Attr[] {
  return element.getAttributeNames()
    .filter(keyFilter)
    .map(key => ({ name: key, value: element.getAttribute(key) }))
}

export function elementsToAttrs(elements: Element[], keyFilter: (key: string) => boolean = () => true): Attr[] {
  return elements.map(el => elementToAttrs(el, keyFilter)).flat();
}