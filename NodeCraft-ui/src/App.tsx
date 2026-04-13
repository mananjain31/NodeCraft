import { useAppDispatch } from "@/hooks/useAppDispatch";
import { builderActions } from "@/builder/store/builderActions";

import { useAppSelector } from "./hooks/useAppSelector";
import {
  selectCanRedo,
  selectCanUndo,
  selectSelectedNodeId,
} from "./builder/store/builderSelectors";
import { useKeys } from "./hooks/useKeys";
import { Canvas } from "./builder/renderer/Canvas";
import clsx from "clsx";

export default function App() {
  useKeys();

  const dispatch = useAppDispatch();
  const selectedNodeId = useAppSelector(selectSelectedNodeId);
  const canRedo = useAppSelector(selectCanRedo);
  const canUndo = useAppSelector(selectCanUndo);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex gap-4">
        <button
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(builderActions.addNode("section"))}
        >
          Add Section
        </button>
        <button
          className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
          disabled={!selectedNodeId}
          onClick={() => {
            if (selectedNodeId) {
              dispatch(builderActions.removeNode(selectedNodeId));
            }
          }}
        >
          Delete Selected
        </button>
        <button
          className={clsx(
            "px-4 py-2  text-white rounded ml-auto",
            canUndo
              ? "bg-blue-500 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed",
          )}
          onClick={() => dispatch(builderActions.undo())}
        >
          Undo
        </button>
        <button
          className={clsx(
            "px-4 py-2  text-white rounded",
            canRedo
              ? "bg-blue-500 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed",
          )}
          onClick={() => dispatch(builderActions.redo())}
        >
          Redo
        </button>
      </div>

      <Canvas />
    </div>
  );
}
