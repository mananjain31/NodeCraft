import { Renderer } from "./Renderer";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectRootNode } from "@/builder/store/builderSelectors";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { builderActions } from "../store/builderActions";

export function Canvas() {
  const root = useAppSelector(selectRootNode);
  const dispatch = useAppDispatch();

  return (
    <div
      className="min-h-screen bg-gray-100 p-8"
      onClick={() => {
        dispatch(builderActions.selectNode(null));
      }}
    >
      {root.children.map((child) => (
        <Renderer key={child.id} node={child} />
      ))}
    </div>
  );
}
