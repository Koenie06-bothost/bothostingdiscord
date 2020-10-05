const discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return

    if(!message.guild.me.voice.channel) return

    if(message.guild.me.voice.channelID != message.member.voice.channelID) return

    message.guild.me.voice.channel.leave();

}

module.exports.help = {
    name: "stop"
}