const client = require("../index");

client.on("ready", () =>{
    console.log(`${client.user.tag} is ready`)
    client.user.setActivity({
        name: "Xelph Linux",
        type: "PLAYING"
    })
});
