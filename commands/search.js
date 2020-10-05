const discord = require('discord.js');
const bot = new discord.Client();
const search = require("yt-search");

module.exports.run = async (client, message, args, options) => {

    search(args.join(" "), function (err, res) {

        if(err) console.log(err)

        var videos = res.videos.slice(0, 10);

        var response = '';

        for (var i in videos) {

            response += `**[${parseInt(i)+1}]** - ${videos[i].title} \n ${videos[i].url} \r\n\n`

        }

        response += `**Choose a number infront of 1/${videos.length}**`

        var botEmbed = new discord.MessageEmbed()
         .setColor("RANDOM")
         .setDescription(response)
        message.channel.send(botEmbed)

        const filter = music => !isNaN(music.content) && music.content < videos.length && music.content > 0;

        const collection = message.channel.createMessageCollector(filter);

        collection.videos = videos;

        collection.once('collect', function (music) {

            var commandFile = require('./play.js');

            commandFile.run(client, message, [this.videos[parseInt(music.content) - 1].url], options);

        });
    });

}

module.exports.help = {
    name: "search"
}