require("dotenv").config()

const chalk = require("chalk");
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
    const embed = new Discord.MessageEmbed().setTitle('Error!')
        .setDescription("```" + err.stack + "```")
        .setTimestamp()
        .setColor("RED")

    console.log(chalk.red(`[Error!] ${err.stack}`))
    client.channels.cache.get("900297584730591242").send({embeds:[embed]})
})
client.login(process.env.TOKEN);
