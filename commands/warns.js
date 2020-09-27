const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    var warnsUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

            if(!warns[warnsUser.id]) {
                var botEmbed = new discord.MessageEmbed()
                 .setColor("RANDOM")
                 .setFooter(message.member.displayName)
                 .setTimestamp()
                 .setDescription(`**Member: ** ${warnsUser}
                 
                 **Total warns: ** 0`)
                return message.channel.send(botEmbed);
            };

            var botEmbed = new discord.MessageEmbed()
             .setColor("RANDOM")
             .setFooter(message.member.displayName)
             .setTimestamp()
             .setDescription(`**Member: ** ${warnsUser}

             **Total warns: ** ${warns[warnsUser.id].warns}`)
            return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "warns",
    description:"dit is de warns commando."
}