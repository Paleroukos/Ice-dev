const pagination = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'helpmod',
    aliases: ['hmod'],
    description: 'helps moderators',
    execute(client, message, args, Discord) {
        const Page1 = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Sever moderation commands:')
            .setDescription('These are all of my moderation commands!')
            .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
            .addFields(
                { name: '🥾 Kick command', value: '`!kick` and the `@username`' },
                { name: '🚫 Ban command', value: '`!ban` and the `@username`' },
                { name: '🕒🤐 Tempmute command', value: '`!tempmute` the `@username` and the amount you want to mute them e.x. `10s`' },
                { name: '🤐 Mute command', value: '`!mute` and the `@username`' },
                { name: '😀 Unmute command', value: '`!unmute` and the `@username`' },
            )
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')

        const Page2 = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Sever moderation commands:')
            .setDescription('These are all of my moderation commands!')
            .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
            .addFields(
                { name: '🗑️ The clear command', value: '`!clear`' },
                { name: '🐢 The slow mode command', value: '`!slowmode {amount}`' }
            )    
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')

            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have the permission to use this command!").then (message =>message.delete({timeout: 5000}));
            const pages = [
                Page1,
                Page2,
            ]
    
            const emoji = ["⏪", "⏩"]
    
            const timeout = '60000'
    
            pagination(message, pages, emoji, timeout)
    }
}