import { nanoid } from "nanoid";
import type { IdStratergy } from "./IdStrategy";

export class NanoIdStrategy implements IdStratergy {
  generate(): string {
    return nanoid();
  }
}
