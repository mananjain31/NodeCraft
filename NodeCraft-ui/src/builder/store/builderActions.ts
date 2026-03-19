import { builderSlice } from "./builderSlice";
import { nodeFactory } from "../config/builderConfig";
import type { ComponentType } from "../tree/tree.types";

const { addNode, removeNode, selectNode, undo, redo } = builderSlice.actions;

export const builderActions = {
  addNode(parentId: string, type: ComponentType) {
    return addNode({
      parentId,
      newNode: nodeFactory.create(type),
    });
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
};
