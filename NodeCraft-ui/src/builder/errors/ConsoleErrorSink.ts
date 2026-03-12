import type { BuilderError } from "./error.types";
import type { ErrorSink } from "./ErrorSink";

export class ConsoleErrorSink implements ErrorSink {
  handle(error: BuilderError): void {
    console.warn(
      `[Builder Warning] ${error.code}: ${error.message}`,
      error.meta ?? {},
    );
  }
}
