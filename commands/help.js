const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['commands', 'halp', 'h'],
    description: "help command",
    execute(client, message, args, Discord) {
        const helpEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle("The prefix of Vibe Bot is `!`")
            .setDescription("`-`To access Vibe's panel, please type !panel.")
            .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
            .addFields(
                { name: '🛡️ Moderation Config', value: '`!helpmod`' },
                { name: '😂 Meme Commands', value: '`!helpmeme`' },
                { name: '🎯 Fun Commands', value: '`!helpfun`' },
                { name: '👀 Miscellaneous commands', value: '`!helpmisc`' }
            )
            
        message.channel.send(helpEmbed);
    }
}