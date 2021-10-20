const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    run: async (client, interaction) => {
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    },
};
