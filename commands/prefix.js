const discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINSTRATOR")) return message.reply("You can't use this command!")

    if(!args[1]) return message.reply("Select a prefix you want to use for your server!")

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    prefixes[message.guild.id] = {
        prefixes: args[1]
    };

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if(err) console.log(err);
    });

    var stringEmbed = new discord.MessageEmbed()
     .setColor("RANDOM")
     .setTitle("Changed the prefix")
     .setDescription(`Just changed the prefix for this guild to **${args[1]}**`)

}

module.exports.help = {
    name: "prefix"
}