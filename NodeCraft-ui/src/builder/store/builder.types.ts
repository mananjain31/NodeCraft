import type { PageSchema } from "builder/tree/tree.types";
import type { HistoryState } from "./history.types";

export interface BuilderState {
  history: HistoryState<PageSchema>;
  selectedNodeId: string | null;
}
