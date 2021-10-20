const Discord = require("discord.js")

module.exports = {
  name: "repository",
  description: "Sends the GitHub repository",

  run: async(client, interaction, args) =>{

    let images = [
      "https://media.discordapp.net/attachments/781838623510888450/899923617758998538/Tue-19-Oct-2021-183456-AEDT.png?width=1422&height=400",
      "https://media.discordapp.net/attachments/781838623510888450/899968895518134282/Tue-19-Oct-2021-213438-AEDT.png?width=706&height=199",
      "https://preview.redd.it/vjjb95xqkdu71.png?width=960&crop=smart&auto=webp&s=9c58be9edfea342977237d30a7e420113fb979b7",
      "https://preview.redd.it/9b72ajc4tvo71.png?auto=webp&s=8c765e2ab48b3fd51d7bdc89795fe3de990d02f0"
    ]
    const image = images[Math.floor(Math.random() * images.length)];

    const embed = new Discord.MessageEmbed()
    .setTitle("Xelph Repository")
    .setImage(image)
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(interaction.user.username, interaction.user.avatarURL({dynamic:true}))
    const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageButton()
      .setLabel("Xelph Repository!")
      .setStyle("LINK")
      .setURL("https://github.com/XelphLinux/xelph-iso")

    )

    interaction.followUp({
      embeds:[embed], components: [row]
    })
  }
}
