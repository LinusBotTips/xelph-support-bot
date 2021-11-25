const client = require("../index");
const chalk = require("chalk")
const axios = require("axios")
const got = require('got')
const Discord = require("discord.js")
client.on("ready", () =>{
    console.log(chalk.green(`${client.user.tag} is ready`))
    client.user.setActivity({
        name: "Xelph Linux",
        type: "PLAYING"
    })


});
