const discord = require("discord.js");

module.exports.run = async (client, message, args, options) => {

    var guildIDData = options.active.get(message.guild.id);

    if(!guildIDData) return;

    var queue = guildIDData.queue;
    var nowPlaying = queue[0];

    var response = `Now playing ${nowPlaying.songTitle} | Requested by: ${nowPlaying.requester} \n \n**Queue: **\n`;

    for (let index = 0; index < queue.length; index++) {

        response += `**${index+1}** - ${queue[index].songTitle} | Requested by: ${queue[index].requester}\n`;
    }

    message.channel.send(response);

}

module.exports.help = {
    name: "queue"
}