const client = require("../index");
const Discord = require("discord.js")

client.on("guildMemberRemove", async member =>{

    const channel = client.channels.cache.get("900161455087841322")

    channel.send({
        content: `${member.user.tag} left <:weird:900186835832148018> what a poop eater`
    })
})