
const Discord = require("discord.js");

module.exports = {
    name: "approve",
    run: async (client, message, args) => {
       if (!client.config.ownerid.includes(message.author.id)) return
       
       const chan = client.channels.cache.get("900154899139006516")
       const id = args[0]
       if(!id) return message.reply("provide a message id")
       const comment = args.slice(1).join(" ")
       if(!comment) return message.reply("provide a comment")
       chan.messages.fetch(id)
       .then(msg => {
           if(msg) return
       msg.reply(`Your suggestion has been approved! Comment from dev ${comment}`)
       })
   }
}