import { useRef } from "react";
import type { ComponentNode } from "../tree/tree.types";
import { componentRegistry } from "./componentRegistry";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  selectHoveredNodeId,
  selectSelectedNodeId,
} from "../store/builderSelectors";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { builderActions } from "../store/builderActions";

export function Renderer({ node }: { node: ComponentNode }) {
  const Component = componentRegistry[node.type];

  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement | null>(null);

  // const selectedId = useAppSelector(selectSelectedNodeId);
  const hoveredId = useAppSelector(selectHoveredNodeId);

  const isSelected = useAppSelector(selectSelectedNodeId) === node.id;
  const isHovered = hoveredId === node.id;

  const selectNode: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event?.stopPropagation();
    dispatch(builderActions.selectNode(node.id));
  };

  if (!Component) {
    return <div>Unknown component: {node.type}</div>;
  }

  return (
    <div
      ref={ref}
      className="relative"
      onClick={selectNode}
      onMouseEnter={() => dispatch(builderActions.setHoveredNode(node.id))}
      onMouseLeave={() =>
        dispatch(builderActions.setHoveredNode(node?.parentId))
      }
    >
      <Component node={node} isHovered={isHovered}>
        {node.children.map((child) => (
          <Renderer key={child.id} node={child} />
        ))}
      </Component>
      {isSelected && (
        <div className="absolute inset-0 border-2 border-blue-500 pointer-events-none" />
      )}
    </div>
  );
}
