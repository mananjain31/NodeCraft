import type { HistoryState } from "builder/store/history.types";

export interface HistoryStrategy<T> {
  record(history: HistoryState<T>, newPresent: T): HistoryState<T>;

  undo(history: HistoryState<T>): HistoryState<T>;

  redo(history: HistoryState<T>): HistoryState<T>;
}
