const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    var options = ["heads", "coin"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[0] == "headsofcoin"){

                if(result == "heads") {
            
                    return message.channel.send("I've throwed head!");

                } else if(result == "coin") {

                   return message.channel.send("I've throwed coin!");

                }
            }

}

module.exports.help = {
    name: "headsofcoin",
    description:"dit is de headsofcoin commando."
}