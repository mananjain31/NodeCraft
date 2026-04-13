import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { builderActions } from "@/builder/store/builderActions";
import { ComponentPicker } from "./ComponentPicker";
import clsx from "clsx";

type Props = {
  nodeId: string;
  isHovered: boolean;
};

export function InsertControl({ nodeId, isHovered }: Props) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="relative flex  my-1">
      {/* <button
        className="text-xs text-blue-500 py-1 rounded hover:bg-blue-50"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        +
      </button> */}

      <button
        className={clsx(
          "mt-3 text-xs text-blue-600 px-2 py-1 rounded",
          "hover:bg-blue-50 cursor-pointer",
          "transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        + Add
      </button>

      {open && (
        <ComponentPicker
          onSelect={(type) => {
            dispatch(builderActions.addNode(type, nodeId));
            setOpen(false);
          }}
          onClose={onClose}
        />
      )}
    </div>
  );
}
