import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { appRouter, createContext } from "api-router";

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(5000);
