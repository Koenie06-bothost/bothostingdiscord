const discord = require("discord.js");
const ytdl = require("ytdl-core");
var servers = {};

module.exports.run = async (client, message, args, options) => {

    if(!message.member.voice.channel) return message.reply("You must be connected with a voice channel to play music!");

    if(!args[1]) return message.reply("Select a URL to play a song!");

    var validate = await ytdl.validateURL(args[1]);
    if(!validate) return message.reply("Select a URL to play a song!1");

    var info = await ytdl.getInfo(args[1]);

    var data = options.active.get(message.guild.id) || {};

    if(!data.connection) data.connection = await message.member.voice.channel.join();

    if(!data.queue) data.queue = [];

    data.guildID = message.guild.id;

    data.queue.push({
        songTitle: info.videoDetails.title,
        requester: message.author.tag,
        url: args[1],
        announceChannel: message.channel.id
    });

    if(!data.dispatcher){
        Play(client, options, data);
    } else {
        message.channel.send(`Added to the queue: ${info.videoDetails.title} | Requested by: ${message.author.tag}`);
    }

    options.active.set(message.guild.id, data);

    // var options = { seek: 3, volume: 1 };

    // var channelJoin = message.member.voice.channel.join()
    //     .then(voiceChannel => {
    //         var stream = ytdl(args[1], {filter: 'audioonly'});
    //         var dispatcher = voiceChannel.play(stream, options);
    //     }).catch(console.error);
    // message.channel.send(`Now playing: ${info.videoDetails.title}`)
}

async function Play (client, ops, data) {

    client.channels.cache.get(data.queue[0].announceChannel).send(`Now playing: ${data.queue[0].songTitle} | Requested by ${data.queue[0].requester}`);

    var options = { seek: 2, volume: 1, bitrate: 128000 };

    data.dispatcher = await data.connection.play(ytdl(data.queue[0].url, {filter: 'audioonly'}), options);

    data.dispatcher.guildID = data.guildID;

    data.dispatcher.once('finish', function () {
        Finish(client, ops, this);
    })
}

function Finish(client, ops, dispatcher){

    var fetechedData = ops.active.get(dispatcher.guildID);

    fetechedData.queue.shift();

    if(fetechedData.queue.length > 0){

        ops.active.set(dispatcher.guildID, fetechedData);

        Play(client, ops, fetechedData);

    } else {

        ops.active.delete(dispatcher.guildID);

        var voiceChannel = bot.guilds.cache.get(dispatcher.guildID).me.voice.channel;

        if(voiceChannel) voiceChannel.leave();

    }
}

module.exports.help = {
    name: "play"
}