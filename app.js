const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", (member) => {
  member.addRole("458417658014990358").catch(console.error);
  member.addRole("458423243812896768").catch(console.error);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('NDU4NzQ3MjMxMTE0MTAwNzQ2.Dgss5Q.qkgZBfFRvkVtbz5B_H0yvoVDi-k');