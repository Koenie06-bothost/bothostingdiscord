const discord = require('discord.js');
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
    fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(json => {
                const memeEmbed = new discord.MessageEmbed()
                 .setTitle(json.title)
                 .setImage(json.url)
                message.channel.send(memeEmbed);
        });
}
module.exports.help = {
    name: "meme",
    description:"dit is de meme commando."
}