import { Renderer } from "./Renderer";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectRootNode } from "@/builder/store/builderSelectors";

export function Canvas() {
  const root = useAppSelector(selectRootNode);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {root.children.map((child) => (
        <Renderer key={child.id} node={child} />
      ))}
    </div>
  );
}
