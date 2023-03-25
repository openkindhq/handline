import { helpRouter } from "./commands/help";
import { router } from "./trpc";

export const appRouter = router({
  help: helpRouter,
});

export type AppRouter = typeof appRouter;

export { createContext } from "./trpc";
