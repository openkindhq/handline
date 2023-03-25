import { Telegraf } from "telegraf";
import start from "./commands/start";
import { trpc, CustomContext } from "./trpc";

const bot = new Telegraf<CustomContext>(process.env.TELEGRAM_TOKEN || "");
bot.context.trpc = trpc;

bot.start(start);
bot.launch();
