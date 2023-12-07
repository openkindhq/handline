import { Telegraf } from "telegraf";
import helpline from "./commands/helpline";
import start from "./commands/start";
import { trpc, CustomContext } from "./trpc";
import alert from "./commands/alert";

const bot = new Telegraf<CustomContext>(process.env.TELEGRAM_TOKEN || "");
bot.context.trpc = trpc;

bot.start(start);
bot.help(start);
bot.command("helpline", helpline);
bot.command("alert", alert);

bot.launch();
