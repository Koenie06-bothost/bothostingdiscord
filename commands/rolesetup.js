const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle(`React on the emoji's to get a ping be a message!`)
     .setDescription(`📊 = Get a ping if the bot status is updated
     <:update:760898844417720400> = Get a ping by every bot update`)
     .setFooter(`More coming soon!`)
    message.channel.send(botEmbed).then((m => {
        m.react('📊')
        m.react('760898844417720400')
    }))
    
}

module.exports.help = {
    name: "rolesetup",
    description:"."
}