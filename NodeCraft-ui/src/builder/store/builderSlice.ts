// builder/store/builderSlice.ts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BuilderState } from "./builder.types";
import type { ComponentNode } from "../tree/tree.types";
import type { TreeOperationResult } from "../tree/tree.types";
import cloneDeep from "lodash/cloneDeep";

import { insertNode, removeNodeById, findNodeById } from "../tree/tree.utils";

import { historyStrategy, errorDispatcher } from "../config/builderConfig";

const initialState: BuilderState = {
  history: {
    past: [],
    present: {
      root: {
        id: "root",
        type: "section",
        props: {},
        children: [],
      },
    },
    future: [],
  },
  selectedNodeId: null,
};

function enforceSelectionInvariant(state: BuilderState) {
  if (!state.selectedNodeId) return;

  const exists = findNodeById(state.history.present.root, state.selectedNodeId);

  if (!exists) {
    state.selectedNodeId = null;
  }
}

function applyStructuralOperation(
  state: BuilderState,
  operation: () => TreeOperationResult<ComponentNode>,
) {
  const presentBefore = cloneDeep(state.history.present);

  const result = operation();

  if (!result.success) {
    errorDispatcher.dispatch(result.error);
    return;
  }

  state.history = historyStrategy.record(
    state.history,
    presentBefore,
    state.history.present,
  );

  enforceSelectionInvariant(state);
}

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addNode: (
      state,
      action: PayloadAction<{
        parentId: string;
        newNode: ComponentNode;
      }>,
    ) => {
      applyStructuralOperation(state, () =>
        insertNode(
          state.history.present.root,
          action.payload.parentId,
          action.payload.newNode,
        ),
      );
    },

    removeNode: (state, action: PayloadAction<{ nodeId: string }>) => {
      applyStructuralOperation(state, () =>
        removeNodeById(state.history.present.root, action.payload.nodeId),
      );
    },

    undo: (state) => {
      state.history = historyStrategy.undo(state.history);
      enforceSelectionInvariant(state);
    },

    redo: (state) => {
      state.history = historyStrategy.redo(state.history);
      enforceSelectionInvariant(state);
    },

    selectNode: (state, action: PayloadAction<string | null>) => {
      state.selectedNodeId = action.payload;
    },
  },
});

export const builderReducer = builderSlice.reducer;
export const builderSliceActions = builderSlice.actions;
