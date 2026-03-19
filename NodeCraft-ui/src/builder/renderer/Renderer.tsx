import type { ComponentNode } from "../tree/tree.types";
import { componentRegistry } from "./componentRegistry";

export function Renderer({ node }: { node: ComponentNode }) {
  const Component = componentRegistry[node.type];

  if (!Component) {
    return <div>Unknown component: {node.type}</div>;
  }

  return (
    <Component node={node}>
      {node.children.map((child) => (
        <Renderer key={child.id} node={child} />
      ))}
    </Component>
  );
}
