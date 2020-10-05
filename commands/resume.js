const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if(!guildIDData) return;

    if(message.member.voice.channel != message.guild.me.voice.channel) return;

    if(!guildIDData.dispatcher.paused) return message.reply("The music is not paused!");

    guildIDData.dispatcher.resume();

}

module.exports.help = {
    name: "resume"
}