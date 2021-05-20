const { MessageEmbed, MessageAttachment } = require("discord.js");
const { Canvas } = require('canvacord');

module.exports = {
    name: 'rip',
    aliases: [''],
    description: "Sends a meme image using canvacord",
    async execute(client, message, args, discord) {
        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png'});

        const image = await Canvas.rip(avatar);

        message.channel.send(
            new MessageAttachment(image, "image.gif")
        );
    }
}  