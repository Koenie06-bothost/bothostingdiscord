const discord = require('discord.js');
const bot = new discord.Client();
const search = require("yt-search");

module.exports.run = async (client, message, args) => {

    search(args.join(' '), function(err, res){

        if(err) message.channel.send("There was a error to search that song!")

        var videos = res.videos.slice(0, 10);
        var response = '';

        for (var i in videos) {

            response += `**[${parseInt(i)+1}]: **${videos[i].title} \r\n`;

        }

        message.channel.send(response);
    })

}

module.exports.help = {
    name: "search"
}