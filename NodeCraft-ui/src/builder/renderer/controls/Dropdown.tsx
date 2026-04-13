import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

type DropdownProps<T> = {
  value: T;
  options: T[];
  onChange: (value: T) => void;
  renderLabel: (value: T) => React.ReactNode;
  className?: string;
};

export function Dropdown<T>({
  value,
  options,
  onChange,
  renderLabel,
  className,
}: DropdownProps<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={ref} className={clsx("relative", className)}>
      {/* Trigger */}
      <button
        className="text-xs text-gray-500 px-1 py-0.5 rounded hover:bg-gray-100 flex items-center gap-1"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        {renderLabel(value)}
      </button>

      {/* Menu */}
      {open && (
        <div
          className="absolute z-50 mt-1 bg-white border border-gray-300 rounded shadow-md"
          onClick={(e) => e.stopPropagation()}
          onMouseLeave={() => setOpen(false)}
        >
          {options.map((opt, i) => (
            <button
              key={i}
              className={clsx(
                "block w-full text-left px-2 py-1 text-xs hover:bg-gray-100",
                opt === value && "bg-gray-100",
              )}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {renderLabel(opt)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
