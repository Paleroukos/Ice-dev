const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'accept',
    aliases: ['sgaccept'],
    description: "accepts a suggestion",
    async execute(client, message, args, Discord) {

        if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
        const messageID = args[0];
        const acceptQuery = args.slice(1).join(" ");

        if(!messageID) return message.reply('Please specify a messageid');
        if(!acceptQuery) return message.reply('Please specify a reason')
        try{
            const suggestionChannel = message.guild.channels.cache.get('825381218823438407'); 
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);

            console.log(suggestedEmbed);
            const useraceept = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
                .setDescription(`**Your suggestion has been accepted!**`)
                .setColor('GREEN')

            const data = suggestedEmbed.embeds[0];
            const acceptEmbed = new MessageEmbed()
                .setAuthor(data.author.name, data.author.iconURL)
                .setDescription(data.description)
                .setColor('GREEN')
                .addField("Status (ACCEPTED)", acceptQuery);

            suggestedEmbed.edit(acceptEmbed); 
            
           const user = await client.users.cache.find((u) => u.tag === data.author.name)
           user.send(useraceept);
        }catch(err) {
            console.log(err);
            message.channel.send("That suggestion does not exist");

        }
    },
};    