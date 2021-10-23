const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
  name: 'roles',
  description: 'Sends the message for the drop down role',
  run: async(client, message, args) => {
    if (!client.config.ownerid.includes(message.author.id)) return
   const embed = new Discord.MessageEmbed()
   .setTitle("Roles!")
   .setColor("BLUE")
   .setDescription("**Pick what roles you want!**")
   .setTimestamp()
   .setThumbnail(client.user.avatarURL({size: 1024}))
   .setFooter(client.user.username, client.user.avatarURL())
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setCustomId("ann_role")
        .setLabel("📢 Announcement Role")
        .setStyle("PRIMARY"), 

        new MessageButton()
        .setCustomId("pkg_role")
        .setLabel("📢 Package Update")
        .setStyle("PRIMARY"), 

        new MessageButton()
        .setCustomId("repo_role")
        .setLabel("📢 Repo Outage")
        .setStyle("PRIMARY"), 
    );

    client.channels.cache.get("901372276262457374").send({
        embeds:[embed],
        components: [row] 
    })
  }
}