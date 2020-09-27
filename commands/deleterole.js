const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    let roleDelete = message.guild.roles.cache.get(args.slice(1).join(" "))||message.guild.roles.cache.find(r=>r.name=== args.slice(1).join(" "))
    if(!roleDelete) return message.channel.send(`Use the command like this <?deleterole (role name)>`)
    if(!message.member.permissions.has("MANAGE ROLES")) return message.reply("You can't use this command!")
    roleDelete.delete();
    const Embed1 = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Deleted a role!")
     .setDescription(`**Deleted role name: **${roleDelete.name}

     **Role deleted color: **${roleDelete.color}
     
     **Role deleted by: **${message.author}`)
    message.channel.send(Embed1)

}

module.exports.help = {
    name: "deleterole",
    description:"dit is de deleterole commando."
}