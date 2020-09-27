const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const { send } = require('process');

module.exports.run = async (client, message, args) => {

    const channelmessage = args[2];

    const allmessage = args.slice(2).join(" ")

    message.delete()

    if (!args[0]) return message.channel.send(
                    "The corrrect usage for this command is: announce <channel> <text>",
                ).then(msg => msg.delete({ timeout: 10000}));
    if (!channelmessage) return message.channel.send(
        "The corrrect usage for this command is: announce <channel> <text>",
    ).then(msg => msg.delete({ timeout: 10000}));
    

    const channel = message.mentions.channels.first();

    if (!channel) return message.channel.send(
        "The corrrect usage for this command is: announce <channel> <text>",
    ).then(msg => msg.delete({ timeout: 10000}));

    channel.send(
        (`${args.slice(2).join(" ")}`)

    )

    

    
            

}

module.exports.help = {
    name: "message",
    description:"dit is de message commando."
}