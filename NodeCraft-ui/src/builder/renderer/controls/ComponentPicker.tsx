import type { ComponentType } from "../../tree/tree.types";
import { componentRegistry } from "../componentRegistry";

type Props = {
  onSelect: (type: ComponentType) => void;
  onClose: () => void;
};

export function ComponentPicker({ onSelect, onClose }: Props) {
  const components = Object.keys(componentRegistry) as ComponentType[];

  return (
    <div
      className="absolute z-50 bg-white border border-gray-300 rounded shadow-md p-2 w-40"
      onMouseLeave={onClose}
    >
      {components.map((type) => (
        <button
          key={type}
          className="block w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded"
          onClick={() => onSelect(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
