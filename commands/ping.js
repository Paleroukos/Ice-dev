module.exports = {
    name: 'ping',
    description: "this is a ping cmd",
execute(client, message, args, Discord){
             const embed = new Discord.MessageEmbed()
            .setTitle("Bot's ping")
            .setColor('#9600CC')
            .setThumbnail('https://media3.giphy.com/media/May0SdjFNSrckK7LO9/giphy.gif')
            .setTimestamp()
            .setFooter('Created at', 'https://i.pinimg.com/originals/47/fd/89/47fd8957a2e4b3ba5c4a01acf3fb1755.gif')
            .setDescription(`🏓Latency is ${message.createdTimestamp - new Date() }ms. 
            📚API Latency is ${Math.round(client.ws.ping)}ms`)
            .setFooter(`${message.author.username} #${message.author.discriminator}`); 

        message.channel.send(embed)              
    }
}