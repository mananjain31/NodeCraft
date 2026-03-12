import type { BuilderError } from "./error.types";
import type { ErrorSink } from "./ErrorSink";

export class ErrorDispatcher {
  constructor(private sinks: ErrorSink[]) {}

  dispatch(error: BuilderError) {
    this.sinks?.forEach((sink) => {
      sink.handle(error);
    });
  }
}
