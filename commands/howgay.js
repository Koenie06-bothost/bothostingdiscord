const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    let gayNumber = Math.floor(Math.random() * 101);
    message.channel.send(`:rainbow: You are ${gayNumber}% gay! :rainbow:`)

}

module.exports.help = {
    name: "howgay",
    description:"dit is de howgay commando."
}