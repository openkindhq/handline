import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "api-router";
import { Context } from "telegraf";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:5000/trpc",
    }),
  ],
});

export interface CustomContext extends Context {
  trpc: typeof trpc;
}
