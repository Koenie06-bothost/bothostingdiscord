const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    if(!args[1]) return message.reply("You need to select/tagg a user!").then(msg => msg.delete({ timeout: 10000}));
            if(!args[2]) return message.reply("You need to select how many warns you want to delete from the user!").then(msg => msg.delete({ timeout: 10000}));
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command!")

            var name = 'logs'

            var cleanwarnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

            const channel = message.member.guild.channels.cache.find(c => c.name == "logs")

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
            
            
                 
            }

            if(args[2] == "1") {

                warns[cleanwarnUser.id].warns--;

                fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
                if(err) console.log(err);
                });

             var botEmbed = new discord.MessageEmbed()
                 .setColor("RANDOM")
                 .setFooter(message.member.displayName)
                 .setTimestamp()
                 .setDescription(`**Warn deleted by: ** ${message.author}
                 **Deleted warns of: ** ${cleanwarnUser}
                 **Total warns deleted: ** 1
                 **Warns now of the user: ** ${warns[cleanwarnUser.id].warns}`)
                channel.send(botEmbed)

                message.channel.send(`Succesfully deleted 1 warn of ${warnUser}`)

            } 

            if(args[2] == "2") {

                warns[cleanwarnUser.id].warns--;

                warns[cleanwarnUser.id].warns--;

                fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
                   if(err) console.log(err);
                });

                var botEmbed = new discord.MessageEmbed()
                 .setColor("ff0000")
                 .setFooter(message.member.displayName)
                 .setTimestamp()
                 .setDescription(`**Warns deleted by: ** ${message.author}
                 **Deleted warns of: ** ${cleanwarnUser}
                 **Total warns deleted: ** 2
                 **Warns now of the user: ** ${warns[cleanwarnUser.id].warns}`)
                channel.send(botEmbed)

                message.channel.send(`Succesfully deleted 2 warns of ${warnUser}`)

            }

            if(args[2] == "3") {

                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;

                fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
                   if(err) console.log(err);
                });

                var botEmbed = new discord.MessageEmbed()
                 .setColor("ff0000")
                 .setFooter(message.member.displayName)
                 .setTimestamp()
                 .setDescription(`**Warns deleted by: ** ${message.author}
                 **Deleted warns of: ** ${cleanwarnUser}
                 **Total warns deleted: ** 3
                 **Warns now of the user: ** ${warns[cleanwarnUser.id].warns}`)
                channel.send(botEmbed)

                message.channel.send(`Succesfully deleted 3 warns of ${warnUser}`)

            } 

            if(args[2] == "4") {

                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;

                fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
                   if(err) console.log(err);
                });

                var botEmbed = new discord.MessageEmbed()
                 .setColor("ff0000")
                 .setFooter(message.member.displayName)
                 .setTimestamp()
                 .setDescription(`**Warns deleted by: ** ${message.author}
                 **Deleted warns of: ** ${cleanwarnUser}
                 **Total warns deleted: ** 4
                 **Warns now of the user: ** ${warns[cleanwarnUser.id].warns}`)
                channel.send(botEmbed)

                message.channel.send(`Succesfully deleted 4 warns of ${warnUser}`)

            } 

            if(args[2] == "5") {

                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;
                warns[cleanwarnUser.id].warns--;

                fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
                   if(err) console.log(err);
                });

                var botEmbed = new discord.MessageEmbed()
                 .setColor("ff0000")
                 .setFooter(message.member.displayName)
                 .setTimestamp()
                 .setDescription(`**Warns deleted by: ** ${message.author}
                 **Deleted warns of: ** ${cleanwarnUser}
                 **Total warns deleted: ** 5
                 **Warns now of the user: ** ${warns[cleanwarnUser.id].warns}`)
                channel.send(botEmbed)

                message.channel.send(`Succesfully deleted 5 warns of ${warnUser}`)

            }
            
            if(args[2] == "all") {

                warns[cleanwarnUser.id].warns.delete

                fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
                   if(err) console.log(err);
                });

                var botEmbed = new discord.MessageEmbed()
                 .setColor("ff0000")
                 .setFooter(message.member.displayName)
                 .setTimestamp()
                 .setDescription(`**Warns deleted by: ** ${message.author}
                 **Deleted warns of: ** ${cleanwarnUser}
                 **Total warns deleted: ** All
                 **Warns now of the user: ** ${warns[cleanwarnUser.id].warns}`)
                channel.send(botEmbed)

                message.channel.send(`Succesfully deleted all the warns of ${warnUser}`)

            } 

    

}

module.exports.help = {
    name: "clearwarns",
    description:"dit is de clearwarns commando."
}