const TelegramApi = require("node-telegram-bot-api");
const api = "6201960511:AAFhdmYw-bQavTTNKXj29ARYIAFspWQIJYM";

const bot = new TelegramApi(api, { polling: true });

bot.setMyCommands([
  { command: "/start", description: "start a bot" },
  {
    command: "/info",
    description: "Biz haqimizda ma'lumot",
  },
]);

const start = () => {
  bot.on("message", async (ctx) => {
    const text = ctx.text;
    const chatId = ctx.chat.id;

    if (text === "/start") {
      return bot.sendMessage(
        chatId,
        `Assalomu alaykum xurmatli ${ctx.from.first_name} 😊, Siz Rakhmonov IT-schoolga murojaat qildingiz! Hozirda sizni qaysi kurslarimiz qiziqtiryapti ?`
      );
    }
    if (text === "/info") {
      return bot.sendMessage(chatId, `/info`);
    }
    return bot.sendMessage(chatId, "Siz noto'g'ri buyruq kiritdingiz !");
  });
};

start();
