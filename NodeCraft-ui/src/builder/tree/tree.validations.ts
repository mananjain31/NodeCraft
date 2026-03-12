import type { ComponentNode } from "./tree.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function canInsert(parent: ComponentNode, child: ComponentNode) {
  if (parent.type !== "section") return false;
  return true;
}
