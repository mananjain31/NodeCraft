import type { ComponentNode } from "../../tree/tree.types";

export function Heading({ node }: { node: ComponentNode }) {
  return <h2>{(node?.props?.text as string) ?? "Heading"}</h2>;
}
