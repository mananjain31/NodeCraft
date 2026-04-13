import type { ComponentType } from "../tree/tree.types";
import { Heading } from "./components/Heading";
import { Paragraph } from "./components/Paragraph";
import { Section } from "./components/Section";
import type { RendererComponent } from "./types";

// import { Heading } from "./components/Heading";
// import { Paragraph } from "./components/Paragraph";
// import { Button } from "./components/Button";
// import { Image } from "./components/Image";

export const componentRegistry: Partial<
  Record<ComponentType, RendererComponent>
> = {
  section: Section,
  heading: Heading,
  paragraph: Paragraph,
  //   button: Button,
  //   image: Image,
};
