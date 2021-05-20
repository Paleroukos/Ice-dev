const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    aliases: ['si'],
    description: "makes a suggestion!",
    async execute(client, message, args, discord) {

        const guild = message.guild;
        const embed = new MessageEmbed()
            .setTitle(guild.name)
            .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
            .setColor('#9600CC')
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
            .addField("**-GENERAL INFO**", [
                `**❯ ID:** ${guild.id}`,
                `**❯ Name:** ${guild.name}`,
                `**❯ Owner:** ${guild.owner}`
            ])
            .addField("**-COUNTS**", [
                `**❯ Role:** ${guild.roles.cache.size} roles`,
                `**❯ Channels:** ${guild.channels.cache.filter((ch) => ch.type === 'text' || ch.type === 'voice').size
                } total ( Text: ${guild.channels.cache.filter((ch) => ch.type === "text").size} voice: ${guild.channels.cache.filter((ch) => ch.type === "voice"
                 ).size})`,
                 `**❯ Emojis:** ${guild.emojis.cache.size} (Regular: ${
                    guild.emojis.cache.filter((e) => !e.animated).size
                }, Animated: ${
                    guild.emojis.cache.filter((e) => e.animated).size
                })`,

            ])
            .addField("**-ADDITIONAL INFORMATION**", [
                `**❯ Created at:** ${moment(guild.createdTimestamp).format(
                    "LT"
                    )} Created at: ${moment(guild.createdTimestamp).format("LL")} Created : ${moment(
                        guild.createdTimestamp
                    ).fromNow()}`,
                    `**❯ Region:** ${guild.region}`,
                    `**❯ Boost Tier:** ${guild.boostTier ? `Tier $guild.premiumTier`: "None"}`,
                    `**❯ Boost Count:** ${guild.premiumSubscriptionCount || "0"}`,
            ]);
            

            message.channel.send({ embed });
    },
};    
