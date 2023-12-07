import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const alertRouter = router({
  register: publicProcedure.input(z.object({
    user: z.string(),
    country: z.string()
  })).query(({ ctx, input }) => {

    const { user, country } = input;
    
    console.log(user, country);

    return {
        success: true
    };
  }),
});
