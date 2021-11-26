require("dotenv").config()

const Discord = require("discord.js");

const client = new Discord.Client({
    intents: 32767,
});
module.exports = client;

client.commands = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.config = require("./config.json");

require("./handler")(client);

process.on('unhandledRejection', async (err) => {
    const errEmbed = new Discord.MessageEmbed().setTitle('Error!')
        .setDescription("```" + err.stack + "```")
        .setTimestamp()
        .setColor("RED")

    console.log(`[Error!] ${err.stack}`)

    client.channels.cache.get("900161648071942234").send({
        embeds:[errEmbed]
    })
})
client.login(process.env.TOKEN);
