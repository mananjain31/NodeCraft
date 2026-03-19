import { ConsoleErrorSink } from "@/builder/errors/ConsoleErrorSink";
import { ErrorDispatcher } from "@/builder/errors/ErrorDispatcher";
import { SnapshotHistoryStrategy } from "@/builder/history/SnapshotHistoryStrategy";
import { NanoIdStrategy } from "@/builder/id/NanoIdStrategy";
import { NodeFactory } from "@/builder/id/NodeFactory";
import type { PageSchema } from "@/builder/tree/tree.types";

export const errorDispatcher = new ErrorDispatcher([new ConsoleErrorSink()]);

export const nodeFactory = new NodeFactory(new NanoIdStrategy());

export const historyStrategy = new SnapshotHistoryStrategy<PageSchema>();
