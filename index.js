const Discord = require('discord.js');
const Levels = require('discord-xp');
require('dotenv').config();
const { CanvasSenpai } = require('canvas-senpai');
const canva = new CanvasSenpai();

const client = new Discord.Client();
const roleClaim = require('./role-claim');

//mongodb for discord-xp
Levels.setURL("mongodb+srv://jeb47:nigger@uwucluster.ugjlm.mongodb.net/Data")

//commands collection
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
})

//welcomer canvas-senpai
client.on('guildMemberAdd', async member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === "🎉┃welcome");
  if (!channel) return;

 let data = await canva.welcome(member, { link: "https://image.freepik.com/free-vector/abstract-colorful-banner_53876-94146.jpg" })

  const attachment = new Discord.MessageAttachment(
    data,
    "welcome-image.png"
  );

  channel.send(
    `Welcome to the server, ${member.user.username}!`,
    attachment
  );   
});


//levelling system
client.on("message", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const randomXp = Math.floor(Math.random() * 9) + 1;
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    message.rank(`You leveled up to ${user.level}! GG`);
  }
})

//client login/presence
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('vibetech | !help', { type: 'WATCHING' }).catch(console.error);
  roleClaim(client)
});


client.login(process.env.DISCORD_TOKEN);