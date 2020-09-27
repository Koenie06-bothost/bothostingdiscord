const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!args[1]) return message.reply(`Use the command like <?giveaway (time s/h/d/m) (winner item)>`)
    if(!args[1].endsWith("s")&&!args[1].endsWith("h")&&!args[1].endsWith("d")&&!args[1].endsWith("m")) return message.reply("Use the command like <?giveaway (time s/h/d/m) (winner item)>")
    if(isNaN(args[1][0])) return message.channel.send("Use the command like <?giveaway (time s/h/d/m) (winner item)>")
    
    let prize = args.slice(2).join(" ")
    if(!args[2]) return message.reply("Use the command like <?giveaway (time s/h/d/m) (winner item)>")
    var botEmbed = new discord.MessageEmbed()
     .setTitle("🎉 **GIVEAWAY** 🎉")
     .setDescription(`
     React with 🎉 to enter!

     **Giveaway prize: **${prize}
     **Giveaway ends: **${args[1]}`)
     .setTimestamp(Date.now()+ms(args[1]))
     .setColor("#d98a23")
    message.channel.send(botEmbed).then((m => {
        m.react('🎉')
    }))
    setTimeout(() => {
        let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
        if(!winner) {
            var non = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setTitle("🎉 **GIVEAWAY ENDS** 🎉")
             .setDescription(`There are no winners, because no one participated!`)
            return message.channel.send(non)
        };

        var embed = new discord.MessageEmbed()
         .setColor("#d98a23")
         .setTitle("🎉 **GIVEAWAY ENDS** 🎉")
         .setDescription(`Proficiat ${winner}! You've won... **${prize}**!`)
        message.channel.send(embed)
        
    }, ms(args[1]));

}

module.exports.help = {
    name: "giveaway",
    description:"dit is de giveaway commando."
}