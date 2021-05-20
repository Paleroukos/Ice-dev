const { MessageEmbed, version: djsversion } = require('discord.js');
const { utc } = require('moment');
const os = require('os');
const ms = require('ms');
const formatBytes = require('format-bytes')

module.exports = {
    name: 'botinfo',
    description: "this command displays the bot's info",
    aliases: [''],

    execute(client, message, args, Discord){
        const core = os.cpus()[0];
        const embed = new MessageEmbed()
        .setThumbnail('https://data.whicdn.com/images/305188681/original.gif')
        .setColor(message.guild.me.displayHexColor || 'BLUE')
        .addField('GENERAL',[
                `**❯ Client:** ${client.user.tag} (${client.user.id})`,
				`**❯ Commands:** ${client.commands.size}`,
				`**❯ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
				`**❯ Users:** ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
				`**❯ Channels:** ${client.channels.cache.size.toLocaleString()}`,
				`**❯ Creation Date:** ${utc(client.user.createdTimestamp).format('Do MMMM YYYY HH:mm:ss')}`,
				`**❯ Node.js:** ${process.version}`,
				`**❯ Discord.js:** v${djsversion}`,
				'\u200b'
        ])
        .addField('System',[
            `**❯ Platform:** ${process.platform}`,
				`**❯ Uptime:** ${ms(client.uptime, {long: true})}`,
				`**❯ CPU:**`,
				`\u3000 Cores: ${os.cpus().length}`,
				`\u3000 Model: ${core.model}`,
				`\u3000 Speed: ${core.speed}MHz`,
				`**❯ Memory:**`,
				`\u3000 Total: ${formatBytes(process.memoryUsage().heapTotal)}`,
				`\u3000 Used: ${formatBytes(process.memoryUsage().heapUsed)}`
        ])
        .setTimestamp()
        .setFooter('Created at', 'https://media.tenor.com/images/934bbbeb1f528a76afd43a7725c3d295/tenor.gif');

		message.channel.send(embed);
    }
};