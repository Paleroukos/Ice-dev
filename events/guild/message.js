const { badwords } = require('./misc/badwords.json');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch').default;

module.exports = (Discord, client, message) => {
    if(message.author.bot || message.channel.type === 'dm') return;

//monkedev ai
    if(message.channel.name === "🤖bot-chat") {
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
        .then(response => response.json())
        .then(data => {
            message.reply(data.response)
        })
        .catch(() => {
            message.reply("Could find any responses");
        })
    };

//anti-swear
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        let confirm = false;
   
        var i;
        for(i = 0;i < badwords.length; i++) {
          
          if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
            confirm = true;
          
        }
        if(confirm) {
            message.delete()
            const swearEmbed = new MessageEmbed()
                .setColor("#9600CC")
                .setTitle('__**⚠️WARNING!**__')
                .setTimestamp()
                .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
                .setDescription("Your message was deleted due to it containing prohibited words. (This action was captured)")
                .setThumbnail('https://thumbs.gfycat.com/DazzlingInsignificantDarklingbeetle-small.gif')
            
            message.author.send(swearEmbed);
          }
    }

    const prefix = '!';
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command) command.execute(client, message, args, Discord);
}