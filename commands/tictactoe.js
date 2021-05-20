const { tictactoe } = require('reconlx')

module.exports = {
    name: 'tictac',
    aliases: ['tictactoe',],
    description: "This does a tic tac toe with an other user",
    async execute(client, message,args,Discord) {

        const member = message.mentions.members.first()
        const embed2 = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("**Something went wrong...**")
            .setDescription("Please specify a user to play againts like the example below: \n \`!tictac {user}\`")
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif');
            if(!member) return message.channel.send(embed2)

            new tictactoe({
                player_two: member,
                message: message
            })
    }
}    