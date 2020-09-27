const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const { REPL_MODE_SLOPPY } = require('repl');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You can't use this command!")
    
    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));
    if(!rMember) return message.reply("You need to select/tagg a user!")
    let role = message.guild.roles.cache.find(r => r.name == args[2]) || message.guild.roles.cache.find(r => r.id === args[2]) || message.mentions.roles.first()
    if(!role) return message.reply("You need to select a role to remove!")

    if(!message.guild.me.hasPermission("MANAGE_ROLES"))  return message.reply("I dont have perms to remove that role!")

    if(!rMember.roles.cache.has(role.id)) {
        return message.reply("That user don't have that role!")
    } else {
        await rMember.roles.remove(role.id).catch(err => console.log(err))
        var botEmbed = new discord.MessageEmbed()
         .setColor("RANDOM")
         .setTitle("Removed the Role")
         .setDescription(`**Removed role by: **${rMember}
         
         **Removed role name: **${role}`)
        message.channel.send(botEmbed)
    }
    
    

}

module.exports.help = {
    name: "removerole",
    description:"dit is de removeRole commando."
}