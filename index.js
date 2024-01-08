setInterval(() => {
  console.log("Bot is still running");
}, 300000);

run="while true do npm start done"
const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: false,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express');
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Project is running!.'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.name}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "1193517508225933382", //put your guild id here
  categoryID: "1193889177037709332", //put your category id here
  staffRole: "1193517633346228275", //put your staff role id here
  embedColor: "#ff8f47", //change the hax color code if you want
  anonymousReply: true, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "Twój ticket został zamknięty",
  closedMessage: "",
  staffOpenedTitle: "Użytkownik otworzył Ticket'a",
  staffOpenedMessage: "",
  userOpenedTitle: "",
  userOpenedMessage: "Otrzymaliśmy od Ciebie wiadomość, poczekaj na odpowiedź od administratora.",
  wrongEmoji: "❌", // if you want you can change but don't change it recommaned.
  rightEmoji: "✔️" // if you want you can change but don't change it recommaned.
})
});

client.login(process.env.TOKEN);