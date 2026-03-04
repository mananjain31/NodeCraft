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
}

export interface PageSchema {
  root: ComponentNode;
}
