const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'suggest',
    aliases: ['sg'],
    description: "makes a suggestion!",
    async execute(client, message, args) {
        const suggestionQuery = args.join(" ");
        if (!suggestionQuery) return message.reply('Please specify a suggestion!');


        const embed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
            .setDescription(`**Suggestion**: ${suggestionQuery}`)
            .setColor('ORANGE')
            .setTimestamp()
            .addField("Status", 'PENDING')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif');

        const sumbit = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
            .setDescription(`**Successfully sumbitted the suggestion**`)
            .setColor('BLUE') 
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif');   

        message.channel.send(sumbit).then(message => message.delete({ timeout: 10000 }));
        message.guild.channels.cache.get('825381218823438407').send(embed).then((msg) => {
            msg.react('<a:tick:827865076509835304>');
            msg.react('<a:nigger:827866957020790824>'); 
            
        })        


    }
}