const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Client();

client.on('ready', () => {
  console.log("Je suis près");
});

client.on('message', msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) {
    msg.reply('Pong!');
  }
}
});

client.login(TOKEN);
