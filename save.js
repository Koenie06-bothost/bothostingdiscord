const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const saves = JSON.parse(fs.readFileSync("./saves.json", "utf8"));

module.exports.run = async (client, message, args) => {

    var saveMessage = args.slice(2).join(" ");

    if(!args[1]) return message.reply("Use the command like this: <?save message/emoji (what you wanna save)>")

    if(!saveMessage) return message.reply("Use the command like this: <?save message/emoji (what you wanna save)>")

    if(args[1] == "message") {
        if(!saves[message.author.id]) saves[message.author.id] = {
            save: saveMessage
        };

        fs.writeFile("./saves.json", JSON.stringify(saves), (err) =>{
            if(err) console.log(err);
        });
    } 

}

module.exports.help = {
    name: "save",
    description:"dit is de save commando."
}