const Discord = require('discord.js');

module.exports = {
  name: 'status',
  description: 'change le bot status',
  run: async(client, interaction, args) => {
    if (!client.config.ownerid.includes(message.author.id)) return
    if (!args[0]) return message.reply({
        content: "Parameters: `activityType` `statusText`"
    })

    const valid = ["LISTENING", "WATCHING", "PLAYING"],
    activitytype = args[0].toUpperCase(),
    text = args.slice(1).join(" ")

if (!valid.includes(activitytype)) return message.reply({
    content: `Invalid type, status types are: ${valid.join(", ")}`
})

if (text.length > 30) return message.reply({
    content: "You can't use more than 30 char"
})
client.user.setActivity({
    name: text,
    type: activitytype
})
  }
}