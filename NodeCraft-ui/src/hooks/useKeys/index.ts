import { useDeleteKey } from "./useDeleteKey";
import { useEscapeKey } from "./useEscapeKey";

export function useKeys() {
  useDeleteKey();
  useEscapeKey();
}
