import type { RootState } from "@/app/store";

export const selectBuilderState = (state: RootState) => state.builder;

export const selectHistory = (state: RootState) => state.builder.history;

export const selectRootNode = (state: RootState) =>
  state.builder.history.present.root;

export const selectSelectedNodeId = (state: RootState) =>
  state.builder.selectedNodeId;
