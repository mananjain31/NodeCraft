import type { HistoryState } from "builder/history/history.types";

export interface HistoryStrategy<T> {
  record(
    history: HistoryState<T>,
    presentBefore: T,
    newPresent: T,
  ): HistoryState<T>;

  undo(history: HistoryState<T>): HistoryState<T>;

  redo(history: HistoryState<T>): HistoryState<T>;
}
