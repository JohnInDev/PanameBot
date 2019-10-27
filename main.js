const { Client } = require('discord.js');
const { TOKEN, PREFIX } = require("./config");
const client = new Client();

client.on('message', msg => {

  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) {
    msg.reply('Pong!');
  }
}
);
client.on("guildMemberAdd", member => {
  const channel = client.channels.find(r => r.name === "général");
  channel.send(`${member} a rejoin la communauté PanameRP, n'oublie pas de prendre tes rôle`);
});

client.login(TOKEN);

client.on("ready", () => console.log("Je suis près"));
client.on("error", console.error);
client.on("warn", console.warn);
client.on("debug", console.log);
