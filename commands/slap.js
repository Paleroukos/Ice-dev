const { MessageEmbed, MessageAttachment } = require("discord.js");
const { Canvas } = require('canvacord');

module.exports = {
    name: 'slap',
    aliases: [''],
    description: "Sends a meme image using canvacord",
    async execute(client, message, args, discord) {
        const user = message.mentions.users.first();
        if (!user) return message.reply("Please mention a user!")

        const avatar = user.displayAvatarURL({ format: 'png'});

        const image = await Canvas.slap(message.author.displayAvatarURL({ format: 'png'}), avatar);

        message.channel.send(
            new MessageAttachment(image, "image.gif")
        );
    }
}  