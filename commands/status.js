const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const saves = JSON.parse(fs.readFileSync("./saves.json", "utf8"));

module.exports.run = async (client, message, args) => {

    const channel = message.member.guild.channels.cache.find(c => c.name == "bot-status")

    if(args[1] == 'offline') {
        var offlineEmbed = new discord.MessageEmbed()
         .setColor("#ff0000")
         .setTitle("__**Offline**__")
         .setDescription(`The bot is at the moment offline, so you can't use it!`)
         .setTimestamp()
        channel.send(offlineEmbed)
    }

    if(args[1] == 'online') {
        var onlineEmbed = new discord.MessageEmbed()
         .setColor("#ff0000")
         .setTitle("__**Online**__")
         .setDescription(`The bot is at the moment online, so you can use it!`)
         .setTimestamp()
        channel.send(onlineEmbed)
    }

    if(args[1] == 'ma') {
        var onlineEmbed = new discord.MessageEmbed()
         .setColor("#ff0000")
         .setTitle("__**Maintenance**__")
         .setDescription(`The bot is at the moment maintenance, so there can be errors.!`)
         .setTimestamp()
        channel.send(onlineEmbed)
    }
}

module.exports.help = {
    name: "status",
    description:"dit is de status commando."
}