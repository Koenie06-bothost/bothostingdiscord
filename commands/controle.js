const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't use this command!")
        
    var controleUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    const channel = message.member.guild.channels.cache.find(c => c.name == "logs")
    var name = 'logs'
    var rName = 'Muted'
    let muteRole = message.guild.roles.cache.find(role => role.name == "Muted");

    if(!controleUser) return message.reply("You need to select/tagg a user!")

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

    var embed = new discord.MessageEmbed()
     .setTitle("Confirm")
     .setDescription(`Are you sure you want to close this ticket?
     
     🗑 = Kick User
     🔨 = Ban User 
     😬 = Mute User
     😀 = Unmute User`)
    message.channel.send(embed).then(async msg =>{

        var emoji = await promptMessage(msg, message.author, ["🗑", "🔨", "😬", "😀"]);
        if(emoji === "🗑"){

            controleUser.kick("You were kicked from the server!").then(() =>{
                var botEmbed = new discord.MessageEmbed()
                 .setColor("#ff0000")
                 .setFooter(message.member.displayName)
                 .setTimestamp()
                 .setDescription(`**Kicked member: ** ${controleUser}

                 **Kicked by: ** ${message.author}`);
                channel.send(botEmbed);

                message.channel.send(`Succesfully kicked ${controleUser}!`)
                   
            })
            
        } else if(emoji === "🔨"){

            controleUser.ban({
                reason: 'Did something wrong!'
            }).then(() =>{
                var Embed = new discord.MessageEmbed()
                 .setColor("#ff0000")
                 .setFooter(`${message.author}`)
                 .setTimestamp()
                 .setDescription(`**Banned member: **${controleUser}
                 
                 **Banned by: **${message.author}`)
                channel.send(Embed)

                message.channel.send(`Succesfully banned ${controleUser}!`)
            })
            
        } else if(emoji === "😬"){

            if(!muteRole){

                var rName = 'Muted'
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

            controleUser.roles.add(muteRole.id);

            var botEmbed = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setDescription(`**Muted person: ** ${controleUser}

             **Muted by: ** ${message.author}`)
            channel.send(botEmbed)

            message.channel.send(`${controleUser} has been muted! Wait until someone unmute you!`)

        } else if(emoji === "😀"){

            let muteRole = message.guild.roles.cache.find(role => role.name == "Muted", "muted");

            controleUser.roles.remove(muteRole.id);

            var botEmbed = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setDescription(`**Unmuted person: ** ${controleUser}

             **Unmuted by: ** ${message.author}`)
            channel.send(botEmbed)

            message.channel.send(`${controleUser} has been unmuted!`)

        }
    })

}

async function promptMessage(message, author, reactions){
    for(const reaction of reactions){
        await message.react(reaction);
    }


    var filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
    return message.awaitReactions(filter, {max:1}).then(collected => collected.first() && collected.first().emoji.name);
}



module.exports.help = {
    name: "controle",
    description:"dit is de controle commando."
}