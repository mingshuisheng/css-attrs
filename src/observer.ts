import { processStyleKeys, processVar } from "./processors"

const processors = [processStyleKeys, processVar]

export function enablePropsStyle() {
  const observer = new MutationObserver((mutations) => {
    for (const processor of processors) {
      processor(mutations)
    }
  });

  observer.observe(document.body, {
    attributes: true,
    subtree: true,
    childList: true,
  });
}