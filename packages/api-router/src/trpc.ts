import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import helplines from "./data/helplines.json";
import Fuse from "fuse.js";

const now = new Date();
const fuse = new Fuse(helplines, {
  keys: ["region", "keywords", "number"],
});

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {
    req,
    res,
    startedAt: now,
    fuse,
  };
};

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
