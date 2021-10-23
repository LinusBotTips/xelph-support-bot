const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js');
webhookurl = "https://canary.discord.com/api/webhooks/900297832538451970/bANCcp8ozbk4rpPk7NUoIGm18chmyLsESraW-_Ax87vRaYsuiV_XhAbJgzetK24ve-XM"
module.exports = {
  name: 'test',
  run: async(client, message, args) => {
    if (!client.config.ownerid.includes(message.author.id)) return
    const wc = new Discord.WebhookClient({url: webhookurl})
    const embed = new Discord.MessageEmbed()
    .setTitle("Test!")
    .setColor("BLUE")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL({size: 1024}))
    .setFooter(client.user.username, client.user.avatarURL())
     const row = new MessageActionRow()
     .addComponents(
        new MessageButton()
        .setLabel("Test btn")
        .setURL("https://discord.js.org/")
        .setStyle("LINK"), 

     );
    wc.send({
        embeds:[embed],
        components:[row]
    })
  }
}