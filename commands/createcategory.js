const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    let name = args.slice(1).join(" ")

    if(!message.member.permissions.has("MANAGE CHANNELS")) return message.reply("You can't use this command!")

    if(!args[1]) return message.reply("Use the command like <?createcategory (category name)>")

    if(!name) return message.reply("Use the command like <?deletecategory (category name)>")

    message.guild.channels.create(name, {
        type: 'category'
    })

    var botEmbed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**Added category name: ** ${name}

    **Added by: **${message.author}`)
   message.channel.send(botEmbed);

}

module.exports.help = {
    name: "createcategory",
    description:"dit is de createCategory commando."
}