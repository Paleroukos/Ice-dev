const ms = require('ms');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'uptime',
    description: 'this is a uptime command',
    aliases: ['runtime'],

    async execute(client, message, args, Discord){
        const embed = new MessageEmbed()
        .setTitle("__**Bot's uptime**__")
        .setColor('#9600CC')
        .setThumbnail('https://media3.giphy.com/media/May0SdjFNSrckK7LO9/giphy.gif')
        .setTimestamp()
        .setFooter('Created at', 'https://i.pinimg.com/originals/47/fd/89/47fd8957a2e4b3ba5c4a01acf3fb1755.gif')
        .setDescription(`The bot has been running for the past \`${ms(client.uptime, {long: true})}\``); 
        message.channel.send(embed);
    }
};