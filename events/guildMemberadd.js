const client = require("../index");
const Discord = require("discord.js")

client.on("guildMemberAdd", async member =>{
    const welcomeembed = new Discord.MessageEmbed()
    .setAuthor("Welcome To The Xelph Support Server!", client.user.avatarURL())
    .setDescription("**Make sure to check out <#900153373267984434>!**")
    .setColor("#2a9bc9")
    .setTimestamp()
    .setFooter(member.user.username, member.user.avatarURL({dynamic:true}))

    const channel = client.channels.cache.get("900161455087841322")
    channel.send({
        embeds:[welcomeembed]
    })
})