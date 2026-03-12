import type { HistoryState } from "builder/store/history.types";
import type { HistoryStrategy } from "./HistoryStrategy";

export class SnapshotHistoryStrategy<T> implements HistoryStrategy<T> {
  constructor(private MAX_HISTORY = 50) {}

  record(history: HistoryState<T>, newPresent: T): HistoryState<T> {
    let newPast = [...history.past, history.present];

    if (newPast.length > this.MAX_HISTORY) {
      newPast = newPast.slice(1);
    }

    return {
      past: newPast,
      present: newPresent,
      future: [],
    };
  }

  undo(history: HistoryState<T>): HistoryState<T> {
    if (history.past.length === 0) return history;

    const previous = history.past[history.past.length - 1];

    return {
      past: history.past.slice(0, -1),
      present: previous,
      future: [history.present, ...history.future],
    };
  }

  redo(history: HistoryState<T>): HistoryState<T> {
    if (history.future.length === 0) return history;

    const next = history.future[0];

    return {
      past: [...history.past, history.present],
      present: next,
      future: history.future.slice(1),
    };
  }
}
