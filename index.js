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

client.login(process.env.TOKEN);
