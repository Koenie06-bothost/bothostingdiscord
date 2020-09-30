const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const saves = JSON.parse(fs.readFileSync("./saves.json", "utf8"));

module.exports.run = async (client, message, args) => {

    const channel = message.member.guild.channels.cache.find(c => c.name == "bot-status")

    if(args[1] == 'offline') {
        var offlineEmbed = new discord.MessageEmbed()
         .setColor("#07db00")
         .setTitle("Offline")
         .setDescription(`The bot is at the moment offline, so you can't use it!`)
         .setTimestamp()
        channel.send(offlineEmbed)
    }
}

module.exports.help = {
    name: "status",
    description:"dit is de status commando."
}