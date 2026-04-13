import { useEffect } from "react";
import { useAppDispatch } from "../useAppDispatch";
import { builderActions } from "@/builder/store/builderActions";
import { isTypingInInput } from "./isTypingInput";
import { useAppSelector } from "../useAppSelector";
import { selectSelectedNodeId } from "@/builder/store/builderSelectors";

export function useEscapeKey() {
  const dispatch = useAppDispatch();
  const selectedNodeId = useAppSelector(selectSelectedNodeId);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (isTypingInInput(e.target)) return;

      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "Escape") {
        dispatch(builderActions.selectNode(null));
      }
    }

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () =>
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [selectedNodeId, dispatch]);
}
