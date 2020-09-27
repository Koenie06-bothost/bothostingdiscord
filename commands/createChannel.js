const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    const name = args.slice(2).join(" ")

    if(!message.member.permissions.has("MANAGE CHANNELS")) return message.reply("You can't use this command!")

    if(!args[1]) return message.reply("Use the command like <?createchannel (voice/text) (channelname)>")

    if(!args[2]) return message.reply("Use the command like <?createchannel (voice/text) (channelname)>")

    if(args[1] == "text"){

        message.guild.channels
         .create(name, {
             type: 'text',
         })

        var botEmbed = new discord.MessageEmbed()
         .setColor("RANDOM")
         .setTitle(`Added a channel!`)
         .setDescription(`**Added channel name: ** ${args[2]}

         **Added channel category: **Text

         **Added channel by: **${message.author}`)
        message.channel.send(botEmbed);
    }
    
    if(args[1] == "voice"){
        message.guild.channels
         .create(name, {
             type: 'voice',
             name: name
         })
        var botEmbed = new discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(`**Added channel name: ** ${args[2]}

         **Channel category: **Voice
         
         **Added by: **${message.author}`)
        message.channel.send(botEmbed);
    }

}

module.exports.help = {
    name: "createchannel",
    description:"dit is de createChannel commando."
}