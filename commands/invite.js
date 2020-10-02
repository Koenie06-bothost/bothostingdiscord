const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    var messageEmbed = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle(`Invite`)
     .setDescription(`You want to add me to your server? Sure!
     
     Click [here](https://discord.com/api/oauth2/authorize?client_id=745618266361298985&permissions=8&scope=bot) to invite`)
    message.channel.send(messageEmbed)

}


module.exports.help = {
    name: "invite",
    description:"invite command"
}