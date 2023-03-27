import { helpRouter } from "./routes/help";
import { helplineSearchRouter } from "./routes/helpline";
import { router } from "./trpc";

const commandRouter = router({
  help: helpRouter,
  helpline: helplineSearchRouter,
});

export const appRouter = router({
  commands: commandRouter,
});

export type AppRouter = typeof appRouter;

export { createContext } from "./trpc";
