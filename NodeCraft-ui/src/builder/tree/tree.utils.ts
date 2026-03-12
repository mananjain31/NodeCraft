import type { ComponentNode, TreeOperationResult } from "./tree.types";

function findNodeParent(
  root: ComponentNode,
  nodeId: string,
): ComponentNode | null {
  for (const child of root.children) {
    if (child.id === nodeId) return root;
    const result = findNodeParent(child, nodeId);
    if (result) return result;
  }
  return null;
}

export function findNodeById(
  root: ComponentNode,
  nodeId: string,
): ComponentNode | null {
  if (root.id === nodeId) {
    return root;
  }
  for (const child of root.children) {
    const result = findNodeById(child, nodeId);
    if (result) return result;
  }
  return null;
}

export function insertNode(
  root: ComponentNode,
  parentId: string,
  newNode: ComponentNode,
  index?: number,
): TreeOperationResult<ComponentNode> {
  const parentNode = findNodeById(root, parentId);
  if (parentNode === null)
    return {
      success: false,
      error: {
        code: "NODE_NOT_FOUND",
        message: `Parent node ${parentId} not found`,
        meta: { parentId },
      },
    };
  if (index !== undefined && index >= 0 && index <= parentNode.children.length)
    parentNode.children.splice(index, 0, newNode);
  else parentNode.children.push(newNode);
  return { success: true, value: newNode };
}

export function removeNodeById(
  root: ComponentNode,
  nodeId: string,
): TreeOperationResult<ComponentNode> {
  if (nodeId === root.id)
    return {
      success: false,
      error: {
        code: "CANNOT_REMOVE_ROOT",
        message: "Root cannot be removed",
        meta: { nodeId },
      },
    };
  const parentNode = findNodeParent(root, nodeId);
  if (parentNode === null)
    return {
      success: false,
      error: {
        code: "NODE_NOT_FOUND",
        message: `Node ${nodeId} not found`,
        meta: { nodeId },
      },
    };
  const nodeIndex = parentNode.children.findIndex(
    (child) => child.id === nodeId,
  );
  const [removedNode] = parentNode.children.splice(nodeIndex, 1);
  return { success: true, value: removedNode };
}
