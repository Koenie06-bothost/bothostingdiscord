const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const { time } = require('console');

module.exports.run = async (client, message, args) => {

    const suggest = args.slice(1).join(" ")

    message.delete()

    if(!suggest) return message.reply("You need to say a suggest!").then(msg => msg.delete());

    var botEmbed = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTimestamp()
     .setFooter(`${message.member.displayName}`)
     .setTitle(`**Suggest of ${message.member.displayName}: **`)
     .setDescription(`${args.slice(1).join(" ")}`)
    message.channel.send(botEmbed).then((m => {
        m.react('👍')
        m.react('👎')
    }))
        
    

    
    


}



module.exports.help = {
    name: "suggest",
    description:"dit is de suggest commando."
}