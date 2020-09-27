const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command!").then(msg => msg.delete({ timeout: 10000}));
    if(!args[1]) return message.reply("You need to select/tagg a user!").then(msg => msg.delete({ timeout: 10000}));
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command!").then(msg => msg.delete({ timeout: 10000}))

    var tempmutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if (!tempmutePerson) return message.reply("You need to select/tagg a user!").then(msg => msg.delete({ timeout: 10000}));
        
    let tempmuteRole = message.guild.roles.cache.find(role => role.name == "Muted", "muted");

    var tempmuteTime = args[2];

    if(!tempmuteTime) return message.reply("You need to select a time to mute the person!").then(msg => msg.delete({ timeout: 10000}));

    const channel = message.member.guild.channels.cache.find(c => c.name == "logs")
    var name = 'logs'

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

    var rName = 'Muted'

    if(!tempmuteRole){
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

    tempmutePerson.roles.add(tempmuteRole.id);


    setTimeout(() => {

        tempmutePerson.roles.remove(tempmuteRole.id);
          
        message.channel.send(`${tempmutePerson} was unmuted! How was your mute?`)
          
    }, ms(tempmuteTime));

    var botEmbed = new discord.MessageEmbed()
     .setColor("#ff0000")
     .setDescription(`**Muted person: ** ${tempmutePerson}
     **Muted by: ** ${message.author}
     **Muted for: ** ${ms(ms(tempmuteTime))}`)
    channel.send(botEmbed)

    message.channel.send(`${tempmutePerson} was muted for ${ms(ms(tempmuteTime))}!`)

}

module.exports.help = {
    name: "tempmute",
    description:"Dit is de tempmute command"
}