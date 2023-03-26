import { CustomContext } from "../trpc";
import { telegramFormat } from "../utils";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

export default async function start(ctx: CustomContext) {
  const content = await ctx.trpc.commands.help.get.query();

  ctx.reply(
    telegramFormat(
      `
${content.title}

${content.description}

Uptime: \`${timeAgo.format(Date.parse(content.uptime), "mini")}\`
[Contribute](${content.github}) 
      `
    ),
    {
      parse_mode: "MarkdownV2",
    }
  );
}
