const pagination = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'helpmeme',
    aliases: ['hmeme'],
    description: "shows all of the command available to use (non-mod)",
    async execute(client, message, args) {
        const Page1 = new MessageEmbed()

            .setColor("RANDOM")
            .setTitle('These are all of my commands!')
            .setDescription('These are the commands available at the moment!')
            .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
            .addFields(
               { name: '😂 Beatiful Command', value: "Sends a meme 🤫 \n Command name: `!beautiful {@user}`" },
               { name: '😂 Affect Command', value: "Sends a meme 🤫 \n Command name: `!affect {@user}`" },
               { name: '😂 Hilter Command', value: "Sends a meme that says worse than hitler (nothing racist so don't worry)🤫 \n Command name: `!hitler {@user}`" },
               { name: '😂 Jail Command', value: "Sends a meme of a user being in jail 🤫 \n Command name: `!jail {@user}`" },
               { name: '😂 Jokeroverhead Command', value: "Sends a meme 🤫 \n Command name: `!jokeoverhead {text}`" }
            )

        const Page2 = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('These are all of my commands!')
        .setDescription('These are the commands available at the moment!')
        .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
            .addFields(
                { name: '😂 Facepalm Command', value: "Sends a meme 🤫 \n Command name: `!facepalm {@user}`" },
                { name: '😂 Ohno meme Command', value: "Sends a meme 🤫 \n Command name: `!ohno {text}`" },
                { name: '😂 Opinion meme Command', value: "Sends a meme 🤫 \n Command name: `!opinion {text}`" },
                { name: '😂 Rainbow meme Command', value: "Sends a meme ( ゜-゜ノ) \n Command name: `!rainbow {@user}`" },
                { name: '😂 Rip meme Command', value: "Sends a meme 🤫 \n Command name: `!rip {@user}`" }
            )

        const Page3 = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('These are all of my commands!')
        .setDescription('These are the commands available at the moment!')
        .setThumbnail('https://i.pinimg.com/originals/5b/8b/d8/5b8bd869fb9e04be0c2a7f6202664408.gif')
            .addFields(
                { name: '😂 Shit Command', value: "Sends a meme ( ゜-゜ノ) \n Command name: `!shit {@user}`" },
                { name: '😂 Slap Command', value: "Sends a meme ( ゜-゜ノ) \n Command name: `!slap {@user}`" },
                { name: '😡🗑️ Trigger Command', value: "Sends a meme ( ゜-゜ノ) \n Command name: `!trigger {@user}`" },
                { name: '🗑️ Trash Command', value: "Sends a meme ( ゜-゜ノ) \n Command name: `!trash {@user}`" },
                { name: '😂 Wanted meme Command', value: "Sends a meme ( ゜-゜ノ) \n Command name: `!wanted {@user}`" },
                { name: '😵 Wasted meme Command', value: "Sends a meme ( ゜-゜ノ) \n Command name: `!wasted {@user}`" }

            )


        const pages = [
            Page1,
            Page2,
            Page3
        ]

        const emoji = ["⏪", "⏩"]

        const timeout = '60000'

        pagination(message, pages, emoji, timeout)
    }

}