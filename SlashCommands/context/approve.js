const { Client, CommandInteraction, WebhookClient, MessageEmbed } = require("discord.js");

module.exports = {
    name: "approve",
    type: 'MESSAGE',
    run: async (client, interaction, args) => {
        if (!client.config.ownerid.includes(interaction.user.id)) return interaction.followUp({content: "This isnt for you"})
        const msg = await interaction.channel.messages.fetch(
            interaction.targetId
        )
        if(msg.author.bot) return interaction.followUp({
            content: "Why are you using this on a bot dumbass"
        })
        const webhook = new WebhookClient({url: process.env.APPROVEDHOOK})
        const embed = new MessageEmbed()
        .setAuthor("Accepted Suggestion!", msg.author.avatarURL({dyanic:true}))
        .setDescription(`Suggestion: **${msg.content}**`)
        .setColor("BLUE")
        .setTimestamp()
        .setFooter(interaction.user.username, interaction.user.avatarURL({dynanic:true}))        
       
        webhook.send({
            username: "Accepted Suggestions!",
            embeds:[embed],
            content: `Hey! ${msg.author} your suggestion got accepted!`
        })
        interaction.followUp({content: "Accepted!"}).then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        msg.delte()
        //interaction.followUp({ content: `${msg.author} Your suggestion \`${msg.content}\` was approved!`, ephemeral: false  });
    },
};