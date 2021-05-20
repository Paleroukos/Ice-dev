const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'deny',
    aliases: ['sgdeny'],
    description: "accepts a suggestion",
    async execute(client, message, args, discord) {

        if(!message.member.permissions.has('MANAGE_MESSAGES')) return;
        const messageID = args[0];
        const denyQuery = args.slice(1).join(" ");

        if(!messageID) return message.reply('Please specify a messageid');
        if(!denyQuery) return message.reply('Please specify a reason')
        try{
            const suggestionChannel = message.guild.channels.cache.get('825381218823438407'); 
            const suggestedEmbed = await suggestionChannel.messages.fetch(messageID);

            console.log(suggestedEmbed);
            const userdeny = new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
                .setDescription(`**We are sorry but it appears that you suggestion has been denied!**`)
                .setColor('RED')
            const data = suggestedEmbed.embeds[0];
            const denyEmbed = new MessageEmbed()
                .setAuthor(data.author.name, data.author.iconURL)
                .setDescription(data.description)
                .setColor('RED')
                .addField("Status (DENIED)", denyQuery);

            suggestedEmbed.edit(denyEmbed); 
            
           const user = await client.users.cache.find((u) => u.tag === data.author.name)
           user.send(userdeny);
        }catch(err) {
            console.log(err);
            message.channel.send("That suggestion does not exist");

        }
    },
};