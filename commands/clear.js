const discord = require('discord.js');
const bot = new discord.Client();

module.exports.run = async (client, message, args) => {



            if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You can\'t use this command!')
            if(!args[1]) return message.reply('Say how many messages you want to delete!').then(msg => msg.delete({ timeout: 5000}));
            message.delete()
            if(args[1] === "all"){
                message.channel.messages.fetch().then((results) => {
                    message.channel.bulkDelete(results)
                })
            }
            message.channel.bulkDelete(args[1]);

}

module.exports.help = {
    name: "clear",
    description:"dit is de clear commando."
}