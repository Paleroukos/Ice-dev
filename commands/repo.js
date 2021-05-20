const { MessageEmbed } = require('discord.js');

module.exports = {
      name: "repo",
      aliases: ['rep', 'repository', 'git'],
      description: 'Repository link and information about our djs bot, Vibe!',
      async execute(client, message, args, Discord) {
      let embed = new MessageEmbed()
            .setTitle('Vibe Bot repository')
            .setColor("RANDOM")
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
            .setDescription(`${client.user.username} is a \`open-source\` discord bot by **jeb47**, and **Paler**! Vibe is a multi-based bot where we are trying to include everything possible.
    - You can help by subscribing to the Vibe Bot creators! **[jeb47](https://bit.ly/3lTGqF8)** and **[Paler](https://bit.ly/3rrqqLZ)**!
    - Check out our \`open-source\` github repository **[HERE](https://*not_available_yet*)**!`)
            .setThumbnail(client.user.displayAvatarURL());
    message.channel.send(embed);
      }
}

module.exports.config = {
    name: "repo",
    aliases: ['rep', 'repository', 'git'],
    description: 'Invite link and information about our djs bot, DisCruft!',
}