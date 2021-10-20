const Discord = require('discord.js');

module.exports = {
  name: 'uwufetch',
  description: 'UwU',
  run: async(client, interaction) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("sudo pacman -S uwufetch-git")
    .setDescription("Install it now <:weird:900186835832148018>") 
    .setTimestamp()
    .setColor("BLUE")
    .setFooter(interaction.user.username, interaction.user.avatarURL({dynamic:true}))

    interaction.followUp({
        embeds:[embed]
    })
  }
}