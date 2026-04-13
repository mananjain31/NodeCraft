import clsx from "clsx";
import type { RendererComponentProps } from "../types";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { builderActions } from "@/builder/store/builderActions";
import type React from "react";
import { Dropdown } from "../controls/Dropdown";
import { AutoResizeTextarea } from "../controls/AutoResizeTextarea";

const sizeMap: Record<number, string> = {
  1: "text-4xl font-bold",
  2: "text-3xl font-semibold",
  3: "text-2xl font-semibold",
  4: "text-xl font-medium",
  5: "text-lg font-medium",
  6: "text-base font-medium",
};

export function Heading({ node, isHovered }: RendererComponentProps) {
  const dispatch = useAppDispatch();

  const level = (node.props.level || 2) as number;
  const text = (node.props.text || "") as string;

  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag className="flex py-1 justify-start">
      <div
        className={clsx(
          "relative flex items-center",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <Dropdown
          value={level}
          options={[1, 2, 3, 4, 5, 6]}
          renderLabel={(v) => `H${v}`}
          onChange={(v) =>
            dispatch(
              builderActions.updateNodeProps(node.id, {
                level: v,
              }),
            )
          }
          className={clsx(isHovered ? "opacity-100" : "opacity-0")}
        />
      </div>
      <AutoResizeTextarea
        className={clsx(
          "outline-none bg-transparent w-full",
          "leading-tight",
          sizeMap[level],
        )}
        value={text}
        onChange={(e) =>
          dispatch(
            builderActions.updateNodeProps(node.id, {
              text: e.target.value,
            }),
          )
        }
        placeholder="Heading"
      />
    </Tag>
  );
}
