const client = require("../index");

client.on("interactionCreate", async (interaction) => {
    if(interaction.user.bot) return
    if (interaction.isButton()) {
        await interaction.deferReply({ ephemeral: true }).catch(() => {});

        if(interaction.customId === "ann_role"){
            const announcerole = interaction.guild.roles.cache.get("901374284113522718")
            if(interaction.member.roles.cache.has(announcerole.id)){
            interaction.member.roles.remove(announcerole.id)
            interaction.followUp({content: "I have removed the announcements role"})
            }
            if(!interaction.member.roles.cache.has(announcerole.id)){
                interaction.member.roles.add(announcerole.id)
                interaction.followUp({content: "I have added the announcements role"})
                }       
             }
    } 
     if(interaction.customId === "pkg_role"){
        const pkgrole = interaction.guild.roles.cache.get("901374362173702144")
        if(interaction.member.roles.cache.has(pkgrole.id)){
        interaction.member.roles.remove(pkgrole.id)
        interaction.followUp({content: "I have removed the package update role"})
        }
        if(!interaction.member.roles.cache.has(pkgrole.id)){
            interaction.member.roles.add(pkgrole.id)
            interaction.followUp({content: "I have added the package update role"})
            }       
         }
         if(interaction.customId === "repo_role"){
            const reporole = interaction.guild.roles.cache.get("901374403944783883")
            if(interaction.member.roles.cache.has(reporole.id)){
            interaction.member.roles.remove(reporole.id)
            interaction.followUp({content: "I have removed the repo outage role"})
            }
            if(!interaction.member.roles.cache.has(reporole.id)){
                interaction.member.roles.add(reporole.id)
                interaction.followUp({content: "I have added the repo outage role"})
                }       
             }


});
