const pagination = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'helpfun',
    aliases: ['hfun'],
    description: "shows all of the command available to use (non-mod)",
    execute(client, message, args) {
        const Page1 = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle('These are all of my commands!')
            .setDescription('These are the commands available at the moment!')
            .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
            .addFields(//I can't breathe
                
                { name: '🤪 Hangman command', value: 'With this command you can play a game of hangman! **Command name:** `!hangman`'},
                { name: '🤔 TicTacToe command', value: "This command lets you play a game of Tic-Tac-Toe with an other user! **Command name:** `!TicTacToe @user`"},
                { name: '😂 Meme command', value: 'This command sends a random meme (joke) from redit **Command name:** `!meme`' }, 
                { name: '🖥️ Uptime command', value: 'With this command you can see the uptime of the bot! **Command name:** `!uptime`' },            
                { name: '📈 Rank command', value: 'This command sends you a ranking card which will show how active you are on the server! **Command name:** `!rank`' },
                { name: "🔌 Ping command", value: "This command will show you the bot's ping! **Command name:** `!ping`" }
                
                )
            .setTimestamp()
            .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')
        
        const Page2 = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('These are all of my commands!')
        .setDescription('These are the commands available at the moment!')
        .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
        .addFields(
            { name: '🖼️ Avatar command', value: 'With this command you can see someones avatar in more detail! Just type the command name and type the `@username` **Command name:** `!avatar`' },
            { name: '🧍 User info command', value: 'With this command you can see the info of any user! Just use the command name and after the `@username` **Command name:** `!userinfo`' },
            { name: '📙 Info Command', value: 'With this command you can see some basic info about the bot! Just use the command name like this -> **Command name:** `!avatar`' },
            { name: "🤖 Bot info command", value: "This command shows you everything you can know the bot's information! **Command name:** `!botinfo`" },
            { name: "💻 Server info command", value: "This command shows you everything you can know about this discord server! **Command name:** `!serverinfo`" }
            )
        .setTimestamp()
        .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')

        const Page3 = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('These are all of my commands!')
        .setDescription('These are the commands available at the moment!')
        .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
        .addFields(
            {name: "🖌️ Invert command", value: "With this command you can invert the colors of someone's profile picture! **Command name:** `!invert @user`"},
            {name: "✂️ Circle image command", value: "With this command you can make somebody's profile picture circular in chat! **Command name:** `!circle @user` "},
            {name: "✒️ Sepia command", value: "With this command you can make somebody's profile picture's colors vibrance really low! **Command name:** `!sepia @user`"},
            {name: "🤓 Blur command", value: "With this command you can make somebody's profile picture blurry in chat! **Command name:** `!blur @user`"},
            {name: "🌎 Translate command", value: "With this command you can translate anything you want! **Command name:** `!translate {text}`"}
            )
        .setTimestamp()
        .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif')

            const pages = [
            Page1,
            Page2,
            Page3,
        ]

        const emoji = ["⏪", "⏩"]

        const timeout = '60000'

        pagination(message, pages, emoji, timeout)
    }
}