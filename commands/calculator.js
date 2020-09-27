const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {
    
    let method = args[2];
    let firstNumber = Number(args[1]);
    let secondNumber = Number(args[3])
    const operations = ['+', '-', 'x'];

    if(!method) return message.reply('Use the command like this <?calculator (number) + / - / x (number)>')

    if (!operations.includes(method)) return message.reply('Use the command like this <?calculator (number) + / - / x (number)>')

    if (!args[1]) return message.reply('Use the command like this <?calculator (number) + / - / x (number)>');

    if (!args[2]) return message.reply('Use the command like this <?calculator (number) + / - / x (number)>');

    if (isNaN(firstNumber)) return message.reply('Use the command like this <?calculator (number) + / - / x (number)>');

    if (isNaN(secondNumber)) return message.reply('Use the command like this <?calculator (number) + / - / x (number)>');

    if (method == '+') {
        let doMath = firstNumber + secondNumber
        message.channel.send(`${firstNumber} + ${secondNumber} = ${doMath}`);
    }

    if (method == '-') {
        let doMath = firstNumber - secondNumber
        message.channel.send(`${firstNumber} - ${secondNumber} = ${doMath}`);
    }

    if (method == 'x') {
        let doMath = firstNumber * secondNumber
        message.channel.send(`${firstNumber} x ${secondNumber} = ${doMath}`);
    }
}

module.exports.help = {
    name: "calculator",
    description:"dit is de calculator commando."
}