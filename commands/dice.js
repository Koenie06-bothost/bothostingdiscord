const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    var options = ["1", "2", "3", "4", "5", "6"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0] == "dice"){

        if(result == "1") {
            
            return message.channel.send("The dice came up 1!");

        } else if(result == "2") {

            return message.channel.send("The dice came up 2!");

        } else if(result == "3") {

            return message.channel.send("The dice came up 3!");

        } else if(result == "4") {

            return message.channel.send("The dice came up 4!");

        } else if(result == "5") {

            return message.channel.send("The dice came up 5!");

        } else if(result == "6") {

            return message.channel.send("The dice came up 6!");

        }
    }

}

module.exports.help = {
    name: "dice",
    description:"dit is de dice commando."
}