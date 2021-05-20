const math = require('mathjs');
const { MessageEmbed } = require('discord.js');

module.exports = {
      name: 'math',
      aliases: ['claculate', 'calc'],
      description: 'calculates something',
      async execute(client, message, args) {
            try {
                  message.channel.send(
                        new MessageEmbed()
                              .setColor("RANDOM")
                              .addField('Question', args.join(" "))
                              .addField('Value', math.evaluate(args.join(" ")))
                              .setTimestamp()
                              .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
                  )
            } catch(err) {
                  message.reply('Your question is not valid!');
            }
      }
}