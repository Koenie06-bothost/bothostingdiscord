const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

           if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't use this command!").then(msg => msg.delete({ timeout: 10000}))

           const userKick = message.mentions.users.first()
           const channel = message.member.guild.channels.cache.find(c => c.name == "logs")
           var name = 'logs'


           if(!userKick) return message.reply("You need to select/tagg a user!");

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
        
        
             
        

           if (userKick) {
               var member = message.guild.member(userKick);

               if (member) {
                   member.kick("You were kicked from the server!").then(() =>{
                    var botEmbed = new discord.MessageEmbed()
                     .setColor("#ff0000")
                     .setFooter(message.member.displayName)
                     .setTimestamp()
                     .setDescription(`**Kicked: ** ${userKick}
                     **Kicked by: ** ${message.author}`);
                    channel.send(botEmbed);
                       
                   }).catch(err =>{
                       message.reply('There was a problem to kick te member!')
                       console.log(err);
                   })
               }else {
                   message.reply("That user is't in the server!").then(msg => msg.delete({ timeout: 10000}));
               }
           } else {
               message.reply('You need to select/tagg a person!').then(msg => msg.delete({ timeout: 10000}));
           }

}

module.exports.help = {
    name: "kick",
    description:"dit is de kick commando."
}