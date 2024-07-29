const TelegramBot = require('node-telegram-bot-api');

// Вставьте сюда ваш токен от BotFather
const token = process.env.KEY;

// Создание экземпляра бота
const bot = new TelegramBot(token, { polling: true });

// Команда /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я ваш Telegram бот.');
});

// Команда /joke
bot.onText(/\/joke/, (msg) => {
    const chatId = msg.chat.id;
    const jokes = [
        'Почему программисты не любят природу? Слишком много багов.',
        'Что сказал программист после того, как его код заработал? "О, так он вообще-то работает!"',
        'Почему программисты предпочитают темные комнаты? Потому что свет притягивает багов.',
        'Какое животное ненавидят программисты? Баг-зайцы.',
        'Почему у программистов всегда беспорядок на столе? Они хранят все в стеке.'
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    bot.sendMessage(chatId, randomJoke);
});

console.log('Бот запущен');
