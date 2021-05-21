const firstMessage = require('./first-message')
const { MessageEmbed } = require('discord.js');

module.exports = (client) => {
  const channelId = '845017350252003398'

  const getEmoji = (emojiName) =>
    client.emojis.cache.find((emoji) => emoji.name === emojiName)

  const emojis = {
    Guest: 'Guest',
  }

  const reactions = []
  const embed = new MessageEmbed()
    .setColor ('#75c8ff')
    .setTitle ("React to acess the server")
    .addField("🟢 = __**@Guest**__ role", "> To prevent our server from being raided\n > we have added this verification system.\n > In order to pass it please react to this message.", true)
    

  let emojiText = embed
  for (const key in emojis) {
    const emoji = getEmoji(key)
    reactions.push(emoji)

    const role = emojis[key]
  }

  firstMessage(client, channelId, emojiText, reactions)

  const handleReaction = (reaction, user, add) => {
    if (user.id === '723819104045105172') {
      return
    }

    const emoji = reaction._emoji.name

    const { guild } = reaction.message

    const roleName = emojis[emoji]
    if (!roleName) {
      return
    }

    const role = guild.roles.cache.find((role) => role.name === roleName)
    const member = guild.members.cache.find((member) => member.id === user.id)

    if (add) {
      member.roles.add(role)
    } else {
      member.roles.remove(role)
    }
  }

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, true)
    }
  })

  client.on('messageReactionRemove', (reaction, user) => {
    if (reaction.message.channel.id === channelId) {
      handleReaction(reaction, user, false)
    }
  })
}