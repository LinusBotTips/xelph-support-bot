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
    const channel = client.channels.cache.get("900264447497633812");

    const statschanel = client.channels.cache.get("900295611239235594")
    setInterval(() => {
        let url = `https://api.github.com/repos/xelphlinux/xelph-iso/releases/latest`;
        axios.get(url).then((res) => { 
            statschanel.setName(`${res.data.tag_name}: ${res.data.assets[0].download_count} downloads!`)
        })
    }, 1800000)
    setInterval(() => {
        got('https://www.reddit.com/r/unixporn/random/.json').then(res => {
            let content = JSON.parse(res.body)
            const embed = new Discord.MessageEmbed()
                    .setTitle(content[0].data.children[0].data.title)
                    .setImage(content[0].data.children[0].data.url)
                    .setColor("RANDOM")
                    .setFooter(`👍 ${content[0].data.children[0].data.ups} 👎 ${content[0].data.children[0].data.downs} | Comments : ${content[0].data.children[0].data.num_comments}`)
            channel.send({embeds:[embed]})
        })
    }, 1800000)


});
