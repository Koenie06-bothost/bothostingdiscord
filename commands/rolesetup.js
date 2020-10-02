const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');

module.exports.run = async (client, message, args) => {

    var roleName = reaction.emoji.name;
    var role = reaction.message.guild.roles.cache.find(role => role.name === "Update Ping")
    var member = reaction.message.guild.members.find(member => member.id === user.id)

    var botEmbed = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle(`React on the emoji's to get a ping be a message!`)
     .setDescription(`📊 = Get a ping if the bot status is updated
     <:update:760898844417720400> = Get a ping by every bot update`)
     .setFooter(`More coming soon!`)
    message.channel.send(botEmbed).then((m => {
        m.react('📊')
        m.react('760898844417720400')
    }))

    var roleName = reaction.emoji.name;
    var role = reaction.message.guild.roles.cache.find(role => role.name === "Update Ping")
    var member = reaction.message.guild.members.find(member => member.id === user.id)

    member.roles.add(role.id).then(member => {
        console.log("Good")
    }).catch(err => console.err);
    
}

module.exports.help = {
    name: "rolesetup",
    description:"."
}