const { MessageEmbed } = require("discord.js");
const translate = require("@iamtraction/google-translate")

module.exports = {
    name: 'translate',
    aliases: [''],
    description: "makes a suggestion!",
    async execute(client, message, args, discord) {

        const query = args.join(" ");
        const embed2 = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle("**Something went wrong...**")
            .setDescription("Please specify a text to translate like the example below: \n \`!translate {text}\`")
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif');

        if (!query) return message.reply(embed2);
        const translated = await translate(query, { to: 'en' });
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle("**This Translates to:**")
            .setDescription(translated.text)
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif');

        message.channel.send("translated to:")
        message.channel.send(embed);
    },
};   