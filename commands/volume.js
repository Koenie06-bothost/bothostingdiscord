const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if(!guildIDData) return;

    if(message.member.voice.channel != message.guild.me.voice.channel) return;

    if(isNaN(args[1]) || args[1] > 150 || args[1] < 0) return message.reply("Select a volume number!")

    guildIDData.dispatcher.setVolume(args[1] / 100);

    message.channel.send(`Setted the volume to: ${args[1]}`)

}

module.exports.help = {
    name: "volume"
}