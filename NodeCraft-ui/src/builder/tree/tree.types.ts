import type { BuilderError } from "builder/errors/error.types";

export type ComponentType =
  | "section"
  | "heading"
  | "paragraph"
  | "button"
  | "image";

export interface ComponentNode {
  id: string;
  type: ComponentType;
  props: Record<string, unknown>;
  children: ComponentNode[];
  parentId?: string;
}

export interface PageSchema {
  root: ComponentNode;
}

export type TreeOperationResult<T = unknown> =
  | { success: true; value: T }
  | { success: false; error: BuilderError };
