const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You can\'t use this command!')
            if(!args[1]) return message.reply('Say how many messages you want to delete!').then(msg => msg.delete({ timeout: 5000}));
            message.delete()
            message.channel.bulkDelete(args[1]);

}

module.exports.help = {
    name: "clear",
    description:"dit is de clear commando."
}