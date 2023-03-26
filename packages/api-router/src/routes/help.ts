import { router, publicProcedure } from "../trpc";
export const helpRouter = router({
  get: publicProcedure.query(({ ctx }) => {
    return {
      title: "⛑️ Handline from OpenKind",
      description:
        "Handline is a cross-platform bot that delivers humanitarian aid on your platform of choice. It was created by [Openkind](https://openkind.org), an initiative to collaboratively solve global issues.",
      uptime: ctx.startedAt,
      github: "https://github.com/openkindhq/handline",
    };
  }),
});
