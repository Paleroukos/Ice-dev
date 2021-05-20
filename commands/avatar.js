const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic', 'av'],
    description: "This command displays a user's profile picture",
    async execute(client, message, args, Discord) {
        const user = message.mentions.users.first() || message.author;
         message.channel.send(
            new MessageEmbed()
            .setAuthor(`${user.tag}'s avatar!`)
            .setTimestamp()
            .setColor("#F7347A")
            .setImage(user.displayAvatarURL({size: 4096, dynamic: true}))
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')

         )
         
    }
}