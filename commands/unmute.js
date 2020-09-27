const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command!").then(msg => msg.delete({ timeout: 10000}));
    if(!args[1]) return message.reply("You need to select/tagg a user!").then(msg => msg.delete({ timeout: 10000}));
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command!").then(msg => msg.delete({ timeout: 10000}))

    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if (!mutePerson) return message.reply("You need to select/tagg a user!").then(msg => msg.delete({ timeout: 10000}));
        
    let muteRole = message.guild.roles.cache.find(role => role.name == "Muted", "muted");
    if (!muteRole) return message.channel.send("First you need to say the command ?mute-setup to get started!").then(msg => msg.delete({ timeout: 10000}));

    const channel = message.member.guild.channels.cache.find(c => c.name == "logs")
    var name = 'logs'

    var rName = 'Muted'

    if(!muteRole){
        let rNew = await message.guild.roles.create({
            data:{
                name: rName,
                permissions: ["READ_MESSAGE_HISTORY", "VIEW_CHANNEL"],
            }
        })

        var botEmbed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Error Error...")
        .setDescription(`There was no role named: **Muted** ... But i got ya, and i made one :)

        And i add al the ride permissions for the role!
        Use the command now and it works!`)
        return message.channel.send(botEmbed)
    };

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

    mutePerson.roles.remove(muteRole.id);

    var botEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription(`**Unmuted person: ** ${mutePerson}
     
     **Unmuted by: ** ${message.author}`)
    channel.send(botEmbed)

    message.channel.send(`${mutePerson} has been unmuted! How was your mute?`)

}

module.exports.help = {
    name: "unmute",
    description:"dit is de unmute commando."
}