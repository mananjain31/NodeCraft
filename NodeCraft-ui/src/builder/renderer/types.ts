import type { ComponentNode } from "builder/tree/tree.types";
import type { ReactNode } from "react";
import type { JSX } from "react";

export type RendererComponentProps = {
  node: ComponentNode;
  children?: ReactNode;
  isHovered: boolean;
  isSelected?: boolean;
  depth?: number;
};

export type RendererComponent = (props: RendererComponentProps) => JSX.Element;
