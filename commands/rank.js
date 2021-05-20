const Discord = require('discord.js');
const Levels = require('discord-xp');
const canvacord = require('canvacord');

module.exports = {
    name: 'rank',
    description: 'rank card',
    async execute(client, message) {
        const target = message.author;
        const user = await Levels.fetch(target.id, message.guild.id);
        const neededXP = Levels.xpFor(parseInt(user.level) + 1);

        if(!user) return message.reply("You don't have any xp. Try sending some messages!");

        const rank = new canvacord.Rank()
            .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
            .setCurrentXP(user.xp)
            .setLevel(user.level)
            .setRank(1, 'RANK', false)
            .setRequiredXP(neededXP)
            .setStatus(message.member.presence.status)
            .setProgressBar('#9600CC', 'COLOR')
            .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/822546068507066388/822774854485803048/landscape-background-vector-id1081343258.png")
            .setUsername(message.author.username)
            .setDiscriminator(message.author.discriminator)
        
        rank.build()
            .then(data => {
                const attachment = new Discord.MessageAttachment(data, 'rankcard.png')
                message.channel.send(attachment);
            })      
    }
}