const client = require("../index");
const chalk = require("chalk")
const axios = require("axios")
const Discord = require("discord.js")
const { joinVoiceChannel, createAudioPlayer, createAudioResource } = require("@discordjs/voice");

const Channels = ["914074954566336532"];

client.on("ready", async () => {
    const statschanel = client.channels.cache.get("900295611239235594")
    setInterval(() => {
        let url = `https://xelph.aakashpoopeater.ga`;
        axios.get(url).then((res) => { 
            statschanel.setName(`Total: ${res.data} downloads!`)
        })
    }, 900000)

    console.log(chalk.green(`${client.user.tag} is ready`))
    client.user.setActivity({
        name: "Xelph Linux",
        type: "PLAYING"
    
    })
    for(const channelId of Channels){
        joinChannel(channelId);
        await new Promise(res => setTimeout(() => res(2), 500))
    }

    function joinChannel(channelId) {
        client.channels.fetch(channelId).then(channel => {
            const VoiceConnection = joinVoiceChannel({
                channelId: channel.id,
                guildId: channel.guild.id,
                adapterCreator: channel.guild.voiceAdapterCreator
            });
            const resource = createAudioResource("https://cdn.discordapp.com/attachments/860756646938935316/914073852869484544/chad_1.mp3",{
                inlineVolume: true
            });
            resource.volume.setVolume(0.2);
            const player = createAudioPlayer()
            VoiceConnection.subscribe(player);
            player.play(resource);
            player.on("idle", () => {
                try{
                    player.stop()
                } catch (e) { }
                try{
                    VoiceConnection.destroy()
                } catch (e) { }
                joinChannel(channel.id)
            })
        }).catch(console.error)
    }
})