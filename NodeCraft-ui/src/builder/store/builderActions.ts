import { builderSlice } from "./builderSlice";
import { nodeFactory } from "../config/builderConfig";
import type { ComponentType } from "../tree/tree.types";
import type { AppDispatch, RootState } from "@/app/store";

const {
  addNode,
  removeNode,
  selectNode,
  undo,
  redo,
  setHoveredNode,
  updateNodeProps,
} = builderSlice.actions;

export const builderActions = {
  addNode(type: ComponentType, parentId?: string, index?: number) {
    return (dispatch: AppDispatch, getState: () => RootState) => {
      const state = getState();
      const selectedNodeId = state.builder.selectedNodeId;
      const parentIdToUse = parentId ?? selectedNodeId ?? "root";

      dispatch(
        addNode({
          parentId: parentIdToUse,
          newNode: nodeFactory.create(type),
          index,
        }),
      );
    };
  },

  removeNode(nodeId: string) {
    return removeNode({ nodeId });
  },

  selectNode(nodeId: string | null) {
    return selectNode(nodeId);
  },

  undo() {
    return undo();
  },

  redo() {
    return redo();
  },

  setHoveredNode(hoveredNodeId: string | null | undefined) {
    return setHoveredNode(hoveredNodeId);
  },

  updateNodeProps(nodeId: string, props: Record<string, unknown>) {
    return updateNodeProps({ nodeId, props });
  },
};
