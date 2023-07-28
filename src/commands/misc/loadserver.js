const Discord = require("discord.js")
module.exports.run = async (client, message, args, Discord) => {
    
    message.channel.send("Loading server...");
}

module.exports.config = {
    name: "loadserver",
    aliases: ["ls"],
    Description: 'Command',
}