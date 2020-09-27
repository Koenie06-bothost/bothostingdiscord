const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!message.author.id == "594601571292020759") return;

    var dmUser = args[1];
    var dmMessage = args.slice(2).join(" ");

    message.mentions.members.first().send(`${dmMessage}`).then(() => {
        var botEmbed = new discord.MessageEmbed()
         .setTitle(`DM Sended`)
         .setColor("RANDOM")
         .setDescription(`**Sended DM to: **${dmUser}
         **Sended DM message: **${dmMessage}`)
         .setTimestamp()
        message.channel.send(botEmbed)
    }).catch(() => {
        message.reply("That user closed his DM's or blocked me!")
    })
}

module.exports.help = {
    name: "dm",
    description:"dit is de dm commando."
}