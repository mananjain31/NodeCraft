import type { RootState } from "@/app/store";

export const selectBuilderState = (state: RootState) => state.builder;

export const selectHistory = (state: RootState) => state.builder.history;

export const selectCanRedo = (state: RootState) =>
  state.builder.history.future.length > 0;

export const selectCanUndo = (state: RootState) =>
  state.builder.history.past.length > 0;

export const selectRootNode = (state: RootState) =>
  state.builder.history.present.root;

export const selectSelectedNodeId = (state: RootState) =>
  state.builder.selectedNodeId;

export const selectHoveredNodeId = (state: RootState) =>
  state.builder.hoveredNodeId;
