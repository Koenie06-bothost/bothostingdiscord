const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id){
        return bot.emojis.cache.get(id).toString()
    }
    message.guild.emojis.cache.forEach(emoji=> {
        OverallEmojis++;
        if(emoji.animated){
            Animated++;
            EmojisAnimated+=Emoji(emoji.id)
        } else {
            EmojiCount++;
            Emojis+=Emoji(emoji.id)
        }
    })
    var Embed = new discord.MessageEmbed()
     .setTitle(`All animated emoji's in this server: `)
     .setDescription(`**Nitro Animated Emoji's [${Animated}]**: `)

}


module.exports.help = {
    name: "emoji",
    description:"emoji command"
}