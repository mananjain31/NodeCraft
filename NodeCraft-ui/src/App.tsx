import { Canvas } from "@/builder/renderer/Canvas";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { builderActions } from "@/builder/store/builderActions";

export default function App() {
  const dispatch = useAppDispatch();

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
      </div>

      <Canvas />
    </div>
  );
}
