import clsx from "clsx";
import type { RendererComponentProps } from "../types";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { builderActions } from "@/builder/store/builderActions";
import { AutoResizeTextarea } from "@/builder/renderer/controls/AutoResizeTextarea";

export function Paragraph({ node }: RendererComponentProps) {
  const dispatch = useAppDispatch();

  const text = (node.props.text || "") as string;

  return (
    <div className="my-2 pl-6 pt-1">
      <AutoResizeTextarea
        className={clsx(
          "w-full bg-transparent outline-none",
          "text-base leading-relaxed",
          "placeholder-gray-400",
        )}
        value={text}
        onChange={(e) =>
          dispatch(
            builderActions.updateNodeProps(node.id, {
              text: e.target.value,
            }),
          )
        }
        placeholder="Start typing..."
      />
    </div>
  );
}
