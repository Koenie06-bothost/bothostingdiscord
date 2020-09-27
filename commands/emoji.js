const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    var options = ["(❁´◡`❁)", "╰(*°▽°*)╯", "ಠ_ಠ", "༼ つ ◕_◕ ༽つ", "(¬_¬ )", "¯/_(ツ)_/¯", "( •_•)>⌐■-■", "(*/ω＼*)", "( ´･･)ﾉ(._.`)"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0] == "emoji"){

        if(result == "(❁´◡`❁)") {
            
            return message.channel.send("(❁´◡`❁)");

        } else if(result == "╰(*°▽°*)╯") {

            return message.channel.send("╰(*°▽°*)╯");


        } else if(result == "ಠ_ಠ") {

            return message.channel.send("ಠ_ಠ");

        } else if(result == "༼ つ ◕_◕ ༽つ") {

            return message.channel.send("༼ つ ◕_◕ ༽つ");

        } else if(result == "(¬_¬ )") {

            return message.channel.send("(¬_¬ )");

        } else if(result == "¯/_(ツ)_/¯") {

            return message.channel.send("¯/_(ツ)_/¯");

        } else if(result == "( •_•)>⌐■-■") {

            return message.channel.send("( •_•)>⌐■-■");

        } else if(result == "(*/ω＼*)") {

            return message.channel.send("(*/ω＼*)");

        } else if(result == "( ´･･)ﾉ(._.`)") {

            return message.channel.send("( ´･･)ﾉ(._.`)");

        } else if(result == "( ͡° ͜ʖ ͡°)") {

            return message.channel.send("( ͡° ͜ʖ ͡°)");

        }
    }

}

module.exports.help = {
    name: "emoji",
    description:"dit is de emoji commando."
}