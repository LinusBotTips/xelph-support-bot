
const Discord = require("discord.js");

module.exports = {
    name: "eval",
    run: async (client, message, args) => {
       if (!client.config.ownerid.includes(message.author.id)) return

        const clean = text => {
            if (typeof (text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203))
            else return text
        }

        try {
            const code = args.join(" ")

            let evaled = eval(code)

            if (typeof evaled !== "string") evaled = require("util").inspect(evaled)

            if (code) {
                let evaledembed = new Discord.MessageEmbed()
                    .setTimestamp()
                    .setDescription(`\`\`\`js\n${clean(evaled)}\`\`\``)
                    .setFooter(message.author.tag, message.author.avatarURL({
                        dynamic: true
                    }))
                    .setColor("RANDOM")

                message.reply({
                    embeds: [evaledembed]
                })
            } else message.reply({
                content: "Please provide JS code"
            })

        } catch (err) {
            let erroreval = new Discord.MessageEmbed()
                .setColor("RED")
                .setTimestamp()
                .setDescription(`\`\`\`js\n${clean(err)}\`\`\``)
                .setFooter(message.author.tag, message.author.avatarURL({
                    dynamic: true
                }))

            message.reply({
                embeds: [erroreval]
            })

        }
    }
}