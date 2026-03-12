import type { BuilderError } from "./error.types";

export interface ErrorSink {
  handle(error: BuilderError): void;
}
