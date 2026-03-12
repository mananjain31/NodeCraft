// builder/errors/error.types.ts

export type BuilderErrorCode =
  | "NODE_NOT_FOUND"
  | "INVALID_PARENT"
  | "CANNOT_REMOVE_ROOT"
  | "INVALID_MOVE"
  | "CYCLIC_DROP";

export interface BuilderError {
  code: BuilderErrorCode;
  message: string;
  meta?: Record<string, unknown>;
}
