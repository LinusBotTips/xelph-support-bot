const client = require("../index");

client.on("interactionCreate", async (interaction) => {
    if(interaction.user.bot) return
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) return interaction.followUp({ content: "An error has occured " });


        cmd.run(client, interaction);
    }

    if (interaction.isContextMenu()) {
        
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});
