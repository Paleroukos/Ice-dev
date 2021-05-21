const discord = require('discord.js');

module.exports = {
    name: "close",
    aliases: [''],
    description: "open a ticket!",
    async execute(client, message, args, Discord) {


        const prefix = '!';
        if(!message.content.startsWith(prefix)) return;

        const categoryID = message.member.guild.channels.cache.find(c => c.name == "[!] Tickets [!]")

        if(!categoryID) return;

        if(!message.member.roles.cache.some(role => role.name === "Support")) return;  

        if(message.channel.parentID == categoryID){
        message.channel.send('Deleting ticket in 5 seconds...')
        setTimeout(() => {

            message.channel.delete();
        }, 5000)
            
        } else {
            return;
        }

        
    }
}    