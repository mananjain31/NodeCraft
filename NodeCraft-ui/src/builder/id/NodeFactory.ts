import type { IdStratergy } from "./IdStrategy";
import type { ComponentNode, ComponentType } from "builder/tree/tree.types";

export class NodeFactory {
  constructor(private idStrategy: IdStratergy) {}
  create(type: ComponentType): ComponentNode {
    return {
      id: this.idStrategy.generate(),
      type,
      props: {},
      children: [],
    };
  }
}
