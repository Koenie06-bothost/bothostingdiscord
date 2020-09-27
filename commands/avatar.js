const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    let mentionedUser = message.mentions.users.first() || message.author;

    let avatarEmbed = new discord.MessageEmbed()
     .setTitle(`Avatar of ${mentionedUser.username}: `)
     .setImage(mentionedUser.displayAvatarURL({dynamic: true, size: 2048}))
    message.channel.send(avatarEmbed)
}

module.exports.help = {
    name: "avatar",
    description:"dit is de avatar commando."
}