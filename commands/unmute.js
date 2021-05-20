module.exports = {
    name: 'unmute',
    description: "This command unmutes a member",
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle('User has been successfully unmuted')
        .setDescription("Hope he learned his lesson")
        .setThumbnail('https://media3.giphy.com/media/May0SdjFNSrckK7LO9/giphy.gif')
        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle("Can't find the user")
        .setDescription("make sure to use $unmute (user)")
        .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
        const newEmbed3 = new Discord.MessageEmbed()
        .setColor('#9600CC')
        .setTitle("You don't possess the right permissions to use this command")
        .setDescription("You have to be at least a moderator in order to use this command")
        .setThumbnail('https://media3.giphy.com/media/May0SdjFNSrckK7LO9/giphy.gif')
        if(message.member.roles.cache.has('825381218484355075' || '810450769785389110' || '810450769785389111' || '810450769785389111' || '810450769785389112'
         || '810450769785389113' || '810450769785389114')){
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.id === '825381218413445157');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(muteRole);
            message.channel.send(newEmbed).then (message =>message.delete({timeout: 7000}));
            message.channel.send(`<@${memberTarget.user.id}> is now unmuted`).then (message =>message.delete({timeout: 7000}));
            message.react('✅');
        } else {
            message.channel.send(newEmbed2);
        }

        } else {
            message.channel.send(newEmbed3);
        }
    }
}