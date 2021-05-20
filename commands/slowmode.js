module.exports = {
    name: 'slowmode',
    aliases: [''],
    description: "Sends a meme image using canvacord",
    async execute(client, message, args, discord) {
        const embed = new discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle("**Something went wrong...**")
        .setDescription("You are not permitted to use this command")
        .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
        .setTimestamp()
        .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        const embed2 = new discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle("__**Slow mode has been reset to '0'!**__")
        .setDescription("You did not specify the time for slowmode so it was reset to __**0**__, \n if you want to set slow mode to more than 0 seconds please follow the example **bellow:** \n \`!slowmode {amount}`\ ")
        .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
        .setTimestamp()
        .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        const embed3 = new discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle(`Slowmode is now: **${args[0]}s**`)
        .setTimestamp()
        .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(embed)
        if (!args[0]) {
            message.channel.setRateLimitPerUser(0);
            return message.reply(embed2)
        }


        const messageArray = message.content.split(' ');
        
        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(embed3)
    }
}    