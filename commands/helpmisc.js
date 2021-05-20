const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'helpmisc',
    aliases: ['hmisc'],
    description: "shows all of the command available to use (non-mod)",
    execute(client, message, args) {
        const hfunEmbed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('These are all of my miscellaneous commands!')
            .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
            .addFields(
                { name: '💡 Suggest command', value: "With this command you can suggest anything you want to be added to the bot or to our channel!\n **Command name:** `!suggest {text}`" },
                { name: '🎫 Ticket Command', value: "With this command you can make a support ticket so as to get support from our staff team!\n **Command name:** `!ticket {subject}`" }
                )
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')

        message.channel.send(hfunEmbed);
    }
}