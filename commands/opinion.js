const { MessageEmbed, MessageAttachment } = require("discord.js");
const { Canvas } = require('canvacord');

module.exports = {
    name: 'opinion',
    aliases: [''],
    description: "Sends a meme image using canvacord",
    async execute(client, message, args, discord) {
        const messagedd = args.join(" ");
        if (!messagedd) return message.reply("You need to enter some text, try again")
        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png'});

        const image = await Canvas.opinion(avatar, messagedd);

        message.channel.send(
            new MessageAttachment(image, "image.gif")
        );
    }
}  