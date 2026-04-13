import type { RendererComponentProps } from "../types";
import clsx from "clsx";
import { InsertControl } from "../controls/InsertControl";

export function Section({ node, children, isHovered }: RendererComponentProps) {
  // const dispatch = useAppDispatch();
  // const handleAddSection = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   dispatch(builderActions.addNode("section", node.id));
  // };

  return (
    <div
      className={clsx(
        "relative",
        "rounded-lg",
        "border border-gray-300",
        "p-4 my-3",
        "transition-all",
      )}
    >
      {children}

      <InsertControl isHovered={isHovered} nodeId={node.id ?? "root"} />
    </div>
  );
}
