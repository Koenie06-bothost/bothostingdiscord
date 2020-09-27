const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    var options = ["no", "yes"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (result == "no") {
        message.channel.send("No!")
    } else if (result == "yes") {
        message.channel.send("Yes!")
    }

}

module.exports.help = {
    name: "8ball",
    description:"dit is de 8ball commando."
}