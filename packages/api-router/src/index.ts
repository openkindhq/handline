import { helpRouter } from "./routes/help";
import { router } from "./trpc";

const commandRouter = router({
  help: helpRouter,
});

export const appRouter = router({
  commands: commandRouter,
});

export type AppRouter = typeof appRouter;

export { createContext } from "./trpc";
