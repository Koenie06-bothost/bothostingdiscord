const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    const categoryID = message.member.guild.channels.cache.find(c => c.name == "TICKETS")

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't use this command!")
        
    if(!message.channel.parentID == categoryID) return message.channel.send(`You are not in a ticket channel!`)

    var Embed = new discord.MessageEmbed()
     .setTitle("Confirm")
     .setDescription(`Are you sure you want to close this ticket?
     
     ✅ = Yes
     ❌ = No`)
    message.channel.send(Embed).then(async msg =>{


        var emoji = await promptMessage(msg, message.author, ["✅", "❌"]);
        if(emoji === "✅"){
            if(!message.channel.parentID == categoryID) return message.channel.send(`You are not in a ticket channel!`)
            if(message.channel.parentID == categoryID){
                message.channel.delete();
            }
            
        } else if(emoji === "❌"){
            var botEmbed = new discord.MessageEmbed()
             .setTitle("Canceled")
             .setDescription(`Canceled to close the ticket`)
            msg.edit(botEmbed)
        }
    })

}

async function promptMessage(message, author, reactions){
    for(const reaction of reactions){
        await message.react(reaction);
    }


    var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
    return message.awaitReactions(filter, {max:1}).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "close",
    description:"dit is de close commando."
}