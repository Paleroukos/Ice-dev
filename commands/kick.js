const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'kick',
    description: "this command kicks a member",
    execute(client, message, args, Discord) {
        const member = message.mentions.users.first();

//exception 1
        const newEmbed = new MessageEmbed()
            .setColor('#9600CC')
            .setTitle('User has been successfully kicked')
            .setDescription("Now this guy won't be a problem to us again")
            .setThumbnail('https://i.pinimg.com/originals/0c/ec/13/0cec13eade6da180dbc14d5a7d5ee894.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
//exception 2
        const newEmbed2 = new MessageEmbed()
            .setColor('#9600CC')
            .setTitle('You need to mention a user in order to kick them')
            .setDescription('You can do so by doing $kick and @(user)')
            .setThumbnail('https://thumbs.gfycat.com/DazzlingInsignificantDarklingbeetle-small.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
//exception 3
        const newEmbed3 = new MessageEmbed()
            .setColor('#9600CC')
            .setTitle('You are not permitted to kick a member')
            .setDescription('You need to have the kick permission in order to kick a member')
            .setThumbnail('https://thumbs.gfycat.com/DazzlingInsignificantDarklingbeetle-small.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(newEmbed3).then(message => message.delete({ timeout: 10000 }))
        if (member) {
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.kick();
            message.channel.send(newEmbed).then(message => message.delete({ timeout: 10000 }));
        } else {
            message.channel.send(newEmbed2).then(message => message.delete({ timeout: 10000 }));
        }
    }
}