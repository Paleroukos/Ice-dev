const ms = require('ms');
module.exports = {
    name: 'tempmute',
    description: "This command temporalyy mutes a member",
    execute(client, message,args,Discord) {
        const target = message.mentions.users.first();
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle('User has been successfully muted')
        .setDescription("Hope he learns his lesson")
        .setThumbnail('ttps://i.pinimg.com/originals/0c/ec/13/0cec13eade6da180dbc14d5a7d5ee894.gif')
        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle("Can't find the user")
        .setDescription("make sure to use $tempmute (user) and the amount of time example : !tempmute @paler 10s (10 seconds)")
        .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
        const newEmbed3 = new Discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle("You don't possess the right permissions to use this command")
        .setDescription("You have to be at least a moderator in order to use this command")
        .setThumbnail('https://media3.giphy.com/media/May0SdjFNSrckK7LO9/giphy.gif')
        if(message.member.hasPermission("MANAGE_MESSAGES")){
        if(target) {
            let muteRole = message.guild.roles.cache.find(role => role.id === '825381218413445157');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(muteRole.id);
            message.channel.send(newEmbed).then (message =>message.delete({timeout: 10000}));
            message.channel.send(`<@${memberTarget.user.id}> is now muted for ${ms(ms(args[1]))}`);
            message.react('✅');

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));
        }else{
            message.channel.send(newEmbed2);
        }

        }else{
            message.channel.send(newEmbed3);
        }
    }
}