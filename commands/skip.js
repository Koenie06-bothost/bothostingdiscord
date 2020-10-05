const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if(!guildIDData) return

    if(message.member.voice.channel != message.guild.me.voice.channel) return;

    if(message.member.hasPermission("ADMINSTRATOR")){
        return guildIDData.dispatcher.emit("finish");
    }

    var amountUsers = message.member.voice.channel.members.size;

    var amountSkip = Math.ceil(amountUsers / 2);

    if(!guildIDData.queue[0].voteSkips) guildIDData.queue[0].voteSkips = [];

    if(guildIDData.queue[0].voteSkips.includes(message.member.id)) return message.reply("You already voted to skip the song!")

    guildIDData.queue[0].voteSkips.push(message.member.id);
    options.active.set(message.guild.id, guildIDData);

    if(guildIDData.queue[0].voteSkips.length >= amountSkip){

        return guildIDData.dispatcher.emit("finish");

    }

    message.channel.send(`Skip Vote: ${guildIDData.queue[0].voteSkips.length}/${amountSkip}`)

}

module.exports.help = {
    name: "skip"
}