module.exports = {
  name: "ticket",
  aliases: ['new'],
  permissions: [],
  description: "open a ticket!",
  async execute(client, message, args, Discord) {

    const reason = message.content.split(" ").slice(1).join(" ");

    const specifyembed = new Discord.MessageEmbed()
          .setColor("BLUE")
          .setTitle("Something went wrong...")
          .setDescription("Please specify a ticket subject like the example below! \n \`!new {subject}\`")
          .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
          .setTimestamp()
          .setFooter(`Request made by @${message.author.username}#${message.author.discriminator}`, 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')


    if (!reason) {
      return message.channel.send(specifyembed)
    }
    const channelName = `ticket-${message.author.username}-${message.author.discriminator}`
  if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username.toLowerCase()}${message.author.discriminator}`)) {
      return message.channel.send("Sorry, but you already have a ticket open! ")
  }
    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    
    
    channel.setParent("845020442926514246");

  
    channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGE: false,
      VIEW_CHANNEL: false,
    });
    channel.updateOverwrite(message.author, {
      SEND_MESSAGE: true,
      VIEW_CHANNEL: true,
    });

    const CreatedTicketEmbed = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle("New Support Ticket")
                .setDescription(`<@${message.author.id}> Your support ticket channel is <#${channel.id}>`)
                .setTimestamp()
                .setFooter(`Request made by @${message.author.username}#${message.author.discriminator}`, 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
     
            const GreetEmbed = new Discord.MessageEmbed()
                .setColor("BLUE")
                .addField("New Support Ticket", `<@${message.author.id}> Thanks for sumbitting a support ticket. Our Support team will get back to you shortly`)
                .setTimestamp()
                .setFooter(`Request made by @${message.author.username}#${message.author.discriminator}`, 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')

    const reactionMessage = await channel.send(GreetEmbed);

    try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("Deleting this channel in 5 seconds!");
          setTimeout(() => channel.delete(), 5000);
          break;
          
      }
    });

    message.channel
      .send(CreatedTicketEmbed)
      .then((msg) => {
        setTimeout(() => msg.delete(), 15000);
        setTimeout(() => message.delete(), 15000);
      })
      .catch((err) => {
        throw err;
      });
  },
};