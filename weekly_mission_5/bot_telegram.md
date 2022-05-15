# 🌟 Bot Telegram

## Parte 1: Crea un nuevo bot de telegram

1. Descarga y crea una cuenta de telegram.
2. Accede al Bot Father: https://telegram.me/BotFather.
3. En el chat del bot father envía un mensaje con el texto: `/newbot`.
4. Te pedirá un nombre para tu bot, nombralo: `FizzbuzzLaunchXBot`.
5. Guarda el token de tu nuevo bot, esta es información sensible.
6. Así mismo te dará una url para que abras un nuevo chat con tu bot, enseguida presiona el botón de START, necesitas realizar este paso.

![bot](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Bot%20Telegram/Screenshot_20220502-155335.png)

## Parte 2: Fizzbuzz

1. Abre el proyecto de [fizzbuzz](https://github.com/DanielaBeltranCruz/FizzBuzz).
2. Instala la dependencia: `npm install node-telegram-bot-api --save`.
3. Crea un nuevo script llamado `lib/bot.js`.
4. Modifica tu package.json, dentro de scripts agrega: `"bot": "node ./lib/bot.js"`.
5. En tu archivo `bot.js` agrega el siguiente contenido:

```js
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = parseInt(msg.text);

    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.applyFizzbuzz(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        bot.sendMessage(chatId, responseBot);
    } else {
        bot.sendMessage(chatId, "Envía un número válido");
    }

});
```
Verifica:
+ Aquí agrega el token que te dió el Bot Father: `const token = "";`
+ Verifica que este bien la ruta de tu ExplorerController.
+ Recuerda no versionar tu token.

6. Corre tu nuevo bot: `npm run bot`.
7. Ve a tu chat con el nuevo bot y cada que envíes un número deberá darte la validación del fizzbuzz. Cualquier otro valor te madnará un mensaje de error.

![bot](https://github.com/DanielaBeltranCruz/Playbook-Node.js/blob/main/weekly_mission_5/images/Bot%20Telegram/Screenshot_20220503-105439.png)