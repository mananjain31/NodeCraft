import { useEffect } from "react";
import { useAppDispatch } from "../useAppDispatch";
import { useAppSelector } from "../useAppSelector";
import { selectSelectedNodeId } from "@/builder/store/builderSelectors";
import { builderActions } from "@/builder/store/builderActions";
import { isTypingInInput } from "./isTypingInput";

export function useDeleteKey() {
  const dispatch = useAppDispatch();
  const selectedNodeId = useAppSelector(selectSelectedNodeId);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (isTypingInInput(e.target)) return;

      if (e.key === "Delete" || e.key === "Backspace") {
        if (!selectedNodeId) return;
        dispatch(builderActions.removeNode(selectedNodeId));
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedNodeId, dispatch]);
}
