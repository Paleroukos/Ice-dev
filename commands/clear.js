module.exports = {
    name: 'clear',
    description: "Clear messages!",
    aliases: ['purge', 'bulk', 'delete'],
    async execute(client, message, args, Discord) {
        // Embeds
        // no permissions to clear (embed)
        const newEmbed3 = new Discord.MessageEmbed()
            .setColor('#9600CC')
            .setTitle('You are not permitted to clear messages')
            .setDescription('You need to have the permission to delete messages in order to purge/clear messages')
            .setThumbnail('https://i.pinimg.com/originals/8d/57/62/8d5762d92620523412d73df694ca252b.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        // not a number (embed)
        const newEmbed4 = new Discord.MessageEmbed()
            .setColor('#9600CC')
            .setTitle("please enter a __**DECIMAL**__ number")
            .setDescription("You need to enter a __**DECIMAL**__ number in order for the command to work")
            .setThumbnail('https://data.whicdn.com/images/238157862/original.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        // more than 100 messages at a time (embed)
        const newEmbed5 = new Discord.MessageEmbed()
            .setColor('#9600CC')
            .setTitle("Please delete less than __**100**__ messages at a time!")
            .setDescription("You can't delete more than __**100**__ messages at a time!")
            .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        // put nothing after the command (embed)
        const newEmbed6 = new Discord.MessageEmbed()
            .setColor('#9600CC')
            .setTitle("No __**amount**__ of messages to delete")
            .setDescription("please enter the __**amount**__ of messages that you want to clear")
            .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        // put 0 as the number (embed)
        const newEmbed7 = new Discord.MessageEmbed()
            .setColor('#9600CC')
            .setTitle("You can't delete __**0**__ messages at a time!")
            .setDescription("You must delete __**at least one**__ message at a time")
            .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        // now the ifs
        const newEmbed8 = new Discord.MessageEmbed()
            .setColor('#9600CC')
            .setTitle("Messages have been cleared")
            .setDescription(`Cleared ${args[0]} messages!`)
            .setThumbnail('https://thumbs.gfycat.com/DazzlingInsignificantDarklingbeetle-small.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(newEmbed3)
        if (!args[0]) return message.reply(newEmbed6).then(message => message.delete({ timeout: 5000 }));
        if (isNaN(args[0])) return message.reply(newEmbed4).then(message => message.delete({ timeout: 5000 }));
        if (args[0] > 100) return message.reply(newEmbed5).then(message => message.delete({ timeout: 5000 }));
        if (args[0] < 1) return message.reply(newEmbed7).then(message => message.delete({ timeout: 5000 }));


        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
            message.channel.send(newEmbed8).then((msg) => {
                msg.react('✅');
            })
        });
    }

}