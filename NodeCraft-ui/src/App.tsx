import { Canvas } from "@/builder/renderer/Canvas";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { builderActions } from "@/builder/store/builderActions";
import { useDeleteKey } from "./hooks/useDeleteKey";
import { useAppSelector } from "./hooks/useAppSelector";
import { selectSelectedNodeId } from "./builder/store/builderSelectors";

export default function App() {
  useDeleteKey();

  const dispatch = useAppDispatch();
  const selectedNodeId = useAppSelector(selectSelectedNodeId);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(builderActions.addNode("root", "section"))}
        >
          Add Section
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(builderActions.undo())}
        >
          Undo
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch(builderActions.redo())}
        >
          Redo
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
          disabled={!selectedNodeId}
          onClick={() => {
            if (selectedNodeId) {
              dispatch(builderActions.removeNode(selectedNodeId));
            }
          }}
        >
          Delete Selected
        </button>
      </div>

      <Canvas />
    </div>
  );
}
