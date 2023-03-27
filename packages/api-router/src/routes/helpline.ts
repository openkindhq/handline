import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const helplineSearchRouter = router({
  get: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    return ctx.fuse
      .search(input)
      .map((i) => i.item)
      .slice(0, 3);
  }),
});
