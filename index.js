const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '1113453947:AAGAnuTE-XXektH7XkBJ2WPaZlsL8T8REoM';

const bot = new TelegramBot(TOKEN, {
    polling: true,
});

bot.on('message', (msg) =>{
  console.log(msg);
})