import { CustomContext } from "../trpc";

export default async function start(ctx: CustomContext) {
  ctx.reply((await ctx.trpc.help.get.query()).markdown, {
    parse_mode: "MarkdownV2",
  });
}
