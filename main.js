const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjM3MjAxMjM5NDgxOTA5MjQ4.XbK0MQ.p987IiWsRkWAyKmEHlnzsRub-Qs');