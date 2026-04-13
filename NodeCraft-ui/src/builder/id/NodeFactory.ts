import type { IdStratergy } from "./IdStrategy";
import type { ComponentNode, ComponentType } from "builder/tree/tree.types";

export class NodeFactory {
  constructor(private idStrategy: IdStratergy) {}
  create(type: ComponentType): ComponentNode {
    const node = {
      id: this.idStrategy.generate(),
      type,
      props: {},
      children: [],
    };
    switch (type) {
      case "heading":
        node.props = {
          text: "",
          level: 2, //default
        };
        break;
      case "paragraph":
        node.props = {
          text: "",
        };
    }
    return node;
  }
}
