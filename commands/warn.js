const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));


module.exports.run = async (client, message, args) => {

    if(!args[1]) return message.reply("You need to select/tagg a user!").then(msg => msg.delete({ timeout: 10000}))
            if(!args[2]) return message.reply("You need to say a reason to warn the member!").then(msg => msg.delete({ timeout: 10000}))
            if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command!").then(msg => msg.delete({ timeout: 10000}))

            var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

            var reason = args.slice(2).join(" ");

            var name = 'logs'

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
                message.channel.send(botEmbed);
            }

            if(!warnUser) return message.reply("You need to select/tagg a user!").then(msg => msg.delete({ timeout: 10000}));

            if(!warns[warnUser.id]) warns[warnUser.id] = {
                warns: 0
            };

            warns[warnUser.id].warns++;

            fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
                if(err) console.log(err);
            });

            var botEmbed = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setFooter(message.member.displayName)
             .setTimestamp()
             .setDescription(`**Warned: ** ${warnUser}
             **Warned by: ** ${message.author}
             **Reason: ** ${reason}
             **Number of warns: ** ${warns[warnUser.id].warns}`)
            channel.send(botEmbed);

            message.channel.send(`Succesfully warned ${warnUser}!`)

}

module.exports.help = {
    name: "warn",
    description:"Dit is de warn command"
}