const { MessageEmbed, MessageAttachment } = require("discord.js");
const { Canvas } = require('canvacord');

module.exports = {
    name: 'changemind',
    aliases: ['changemymind'],
    description: "Sends a meme image using canvacord",
    async execute(client, message, args, discord) {
        const messagedd = args.join(" ");
        if (!messagedd) return message.reply("You need to enter some text, try again")
        
        const image = await Canvas.changemymind(messagedd);

        message.channel.send(
            new MessageAttachment(image, "image.gif")
        );
    }
}  