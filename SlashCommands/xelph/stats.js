const Discord = require('discord.js');
const axios = require("axios")
module.exports = {
  name: 'stats',
  description: 'Stats about Xelph!',
  run: async(client, interaction) => {
    let url = `https://api.github.com/repos/xelphlinux/xelph-iso/releases/latest`;
    axios.get(url).then((res) => { 
        const embed = new Discord.MessageEmbed()
        .setAuthor("Stats for the latest Xelph release!")
        .addField("Release:", `${res.data.name}`)
        .addField("Downloads:", `${res.data.assets[0].download_count} downloads`)
        .setColor("BLUE")

        interaction.followUp({
            embeds:[embed]
        })
    })
  }
}