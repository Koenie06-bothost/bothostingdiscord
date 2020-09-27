const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!args[1]) return message.channel.send("Use this command like this <?announce (titel) (description)>")
    if(!args[2]) return message.channel.send("Use this command like this <?announce (titel) (description)>")

    message.delete()
    var botEmbed = new discord.MessageEmbed()
     .setTitle(`${args[1]}`)
     .setDescription(`${args.slice(2).join(" ")}`)
    return message.channel.send(botEmbed)


}

module.exports.help = {
    name: "announce",
    description:"dit is de announce commando."
}