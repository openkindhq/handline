import { router, publicProcedure } from "../trpc";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export const helpRouter = router({
  get: publicProcedure.query(({ ctx }) => {
    return {
      markdown: `
⛑️ HandLine from OpenKind

HandLine is a bot that offers humanitarian aid to people in the platform they prefer\\. This cross\\-platform initiative from [OpenKind](https://openkind\\.org/) aims to collaboratively solve global issues\\. 

🕒 **Uptime**: \`${timeAgo.format(ctx.startedAt, "mini")}\`
🔗 [GitHub](https://github\\.com/openkindhq)`,
    };
  }),
});
