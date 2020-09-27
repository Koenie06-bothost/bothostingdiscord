const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const PREFIX = '?';

module.exports.run = async (client, message, args) => {

    let rName = message.content.split(`${PREFIX}createrole `).join("")
    let rColor;
    if(!message.member.permissions.has("MANAGE ROLES")) return message.reply("You can't use this command!")
    args.forEach(arg=>{
        if(arg.startsWith("#")){
            rColor=arg
        }
    })
    if(!rName){
        return message.reply("Use the command like this <?createrole (role name) (color)")
    }
    if(!rColor){
        return message.reply("Use the command like this <?createrole (role name) (color)")
    }
    if(rColor>=16777215) return message.reply("That hex color is to big! Make it smaller!")
    if(rColor<=0) return message.reply("That hex color is to small! Make it bigger!")
    rName=rName.replace(`${rColor}`, ``)
    let rNew = await message.guild.roles.create({
        data:{
            name: rName,
            color: rColor,
        }
    })
    const Embed = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle(`Added a role!`)
     .setDescription(`**Added role name: **${rName}
     
     **Added role color: **${rColor}
     
     **Added role by: **${message.author}`)
    message.channel.send(Embed);
     

}

module.exports.help = {
    name: "createrole",
    description:"dit is de createrole commando."
}