const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't use this command!")

            const userBan = message.mentions.users.first();

            const channel = message.member.guild.channels.cache.find(c => c.name == "logs")
            var name = 'logs'

           if(!userBan) return message.reply("You need to select/tagg a user!")

           if(!channel){
                message.guild.channels
                .create(name, {
                 type: 'text',
                })

               var botEmbed = new discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Error Error...")
                .setDescription(`There was no channel named: **logs** ... But i got ya, and i made one :)
                
                Use the command now and it works!`)
               return message.channel.send(botEmbed);

            };

            if (userBan) {
                var member = message.guild.member(userBan);

                if (member) {
                    member.ban({
                        reason: 'Did something wrong!'
                    }).then(() =>{
                        var Embed = new discord.MessageEmbed()
                         .setColor("#ff0000")
                         .setFooter(`${message.author}`)
                         .setTimestamp()
                         .setDescription(`**Banned member: **${userBan}
                         
                         **Banned by: **${message.author}`)
                        channel.send(Embed)

                        message.channel.send(`Succesfully banned ${userBan}!`)
                    })
                } else {
                    message.reply('That user isn\'t is the server!').then(msg => msg.delete({ timeout: 10000}));
                }
            } else {
                message.reply('You need to select/tagg a person!').then(msg => msg.delete({ timeout: 10000}));
            }
            



}

module.exports.help = {
    name: "ban",
    description:"dit is de ban commando."
}