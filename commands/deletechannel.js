const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    let channelDelete = message.guild.channels.cache.get(args.slice(1).join(" "))||message.guild.channels.cache.find(r=>r.name=== args.slice(1).join(" "))
    if(!channelDelete) return message.channel.send(`Use the command like this <?deletechannel (channel name)>`)
    if(!message.member.permissions.has("MANAGE CHANNELS")) return message.reply("You can't use this command!")
    channelDelete.delete();
    const Embed1 = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Deleted a channel!")
     .setDescription(`**Deleted channel name: **${channelDelete.name}

     **Channel deleted type: **${channelDelete.type}
     
     **Channel deleted by: **${message.author}`)
    message.channel.send(Embed1)

}

module.exports.help = {
    name: "deletechannel",
    description:"dit is de deletechannel commando."
}