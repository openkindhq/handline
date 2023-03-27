import { CustomContext } from "../trpc";
import { telegramFormat } from "../utils";

export default async function helpline(ctx: CustomContext) {
  let search = ctx.message.text.split(" ");

  if (!search[1]) {
    return ctx.reply(
      telegramFormat(
        `🚨 Helpline Search

Search for appropriate helplines from the helpline directory

/helpline \\[ search query \\]
Example: \`/helpline India Doctor\`
            `
      ),
      {
        parse_mode: "MarkdownV2",
      }
    );
  }

  search = search.slice(1).join(" ");
  const results = await ctx.trpc.commands.helpline.get.query(search);
  if (results.length == 0) {
    return ctx.reply("❌ No helplines found");
  }

  const titleSuffix = results.length === 1 ? "helpline has" : "helplines have";

  const message = `
🚨 ${results.length} ${titleSuffix} been found

${results
  .map((item) => `${item.region}: ${item.title} - \`${item.number}\``)
  .join("\n")}

[Report](https://discord.gg/R4wJ2TDshg)
  `;

  ctx.reply(telegramFormat(message), {
    parse_mode: "MarkdownV2",
    disable_web_page_preview: true,
  });
}
