const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'info',
    description: "this command gives  you information about the bot",
    aliases: [''],

    execute(client, message, args, Discord) {


        const infoembed = new MessageEmbed()
        .setColor('#F7347A')
        .setTitle('Information')
        .setURL('https://discord.gg/RzhhQ7sr7Q')
        .setAuthor('Paler and Jeb47','https://data.whicdn.com/images/317867145/original.gif', 'https://www.youtube.com/channel/UCoa9mXE36fgsOF6hgAhcmrw')
        .setDescription('❤__**Information about the Vibe bot**__❤')
        .setThumbnail('https://data.whicdn.com/images/317867145/original.gif')
        .addFields(
            { name: 'Information', value:'I am a friendly bot created by Paler and jeb47 and i have a lot of cool commands for you to try! '},
            { name: ' Commands', value:'type !help to get a list of the available commands'},
            { name: 'Utility',value: 'This bot has a bunch of commands to make your life easier & make your expirience in this server more stimulating 😁👍'}
        )
        .setTimestamp()
        .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif');
        message.channel.send(infoembed);
    }
}    
