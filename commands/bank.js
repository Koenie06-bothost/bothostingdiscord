const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));

module.exports.run = async (client, message, args) => {

    if(!coins[message.author.id]) {
        var Embed = new discord.MessageEmbed()
         .setColor("RANDOM")
         .setTitle("**Your bank: **")
         .setDescription(`**Total coins: **: 0
     
         Use the command **?work** to get or lose coins!
         Use the command **?bank** to see how many coins you have!
         Use the command **?pay (member)** to pay someone coins!`)
        message.channel.send(Embed)
    }

    var botEmbed = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("**Your bank: **")
     .setDescription(`**Total coins: **: ${coins[message.author.id].coins}
     
     Use the command **?work** to get or lose coins!
     Use the command **?bank** to see how many coins you have!
     Use the command **?pay (member)** to pay someone coins!`)
    message.channel.send(botEmbed)

}



module.exports.help = {
    name: "bank",
    description:"dit is de bank commando."
}