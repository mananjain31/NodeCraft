import type { RendererComponentProps } from "../types";

export function Section({ node, children }: RendererComponentProps) {
  return (
    <div className="border border-dashed border-gray-400 p-6 my-4 rounded">
      <pre>
        {node.type} <span className="text-gray-400">{node.id}</span>
      </pre>
      {children}
    </div>
  );
}
