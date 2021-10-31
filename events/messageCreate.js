const client = require("../index");



client.on("messageCreate", async (message) => {

    if(message.channel.id === "900153282213855272"){

        for(var i = 0; i < message.embeds.length; i++) {
            if(message.embeds[i].title.includes("star") || message.embeds[i].title.includes("cyber")) {
                message.react("❤️")

            }
    }
    }
    if(message.content.toLowerCase().startsWith("i need help")){
        message.reply("Please provide more information about your issue.")
    }
    if (message.author.bot || !message.guild ||!message.content.toLowerCase().startsWith(client.config.prefix)) return;

    const [cmd, ...args] = message.content.slice(client.config.prefix.length).trim().split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);
});
