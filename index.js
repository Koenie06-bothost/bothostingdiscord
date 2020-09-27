const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const ms = require("ms");
const fs = require("fs");
const { error } = require('console');

const xp = require('./levels.json')

const PREFIX = '?';

bot.on('ready', async () =>{
    console.log(`---------------`)
        console.log(`Setting up the bot...`);
            console.log(`---------------`);
        console.log(`Online at ${bot.guilds.size} servers`);
    console.log(`Logged in as ${bot.user.tag}`);
bot.user.setStatus("dnd")
    
});

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon de files niet vinden!");
        return;
    }

    jsFiles.forEach((f, i) => {
        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen!`);

        bot.commands.set(fileGet.help.name, fileGet);
    })

})


var swearWords = ["kanker", "hoer", "tyfus"]

bot.on('message', async message=>{

    let xpAdd = Math.floor(Math.random() * 7) + 8;

    var guildXP = message.guild;
    
    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }

    if(!xp[message.author.id].guild){
        xp[message.author.id] = {
            xp: 0,
            level: 1,
            guild: guildXP
        };
    }

    
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 500;
    xp[message.author.id].xp = curxp + xpAdd;

    if(nxtLvl <= xp[message.author.id].xp){
        xp[message.author.id].level = curlvl + 1;
        message.channel.send(`GG ${message.author}, You've reached level ${xp[message.author.id].level}`)
    }
    fs.writeFile("./levels.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
    });

    let args = message.content.slice(PREFIX.length).split(" ");
    var msg = message.content.toLowerCase();
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var commands = bot.commands.get(command.slice(PREFIX.length));
    if(commands) commands.run(bot,message, args);
    if(!message.content.startsWith(PREFIX)) return;  

    for (let i = 0; i < swearWords.length; i++) {
        
        if (msg.includes(swearWords[i])){

            message.delete();

            return message.reply("Please don't swear!").then(msg => msg.delete({timeout: 5000}));
        }
    } 

    switch(args[0]){
        case 'offline':
            if (message.author.id === "594601571292020759") {
                console.log(`You setted Koenie06#7201 offline`)
                bot.destroy();
            }
        break;

        case 'rank':
            var rankUser = message.guild.member(message.mentions.users.first()) || message.author;

            var botEmbed = new Discord.MessageEmbed()
             .setTitle(`Rank Card of ${rankUser.username}:`)
             .addField(`**Level: **`, curlvl)
             .addField(`**Total XP: **`, curxp)
             .addField(`**Needed XP for next level: **`, nxtLvl)
            message.channel.send(botEmbed)
        break;
    };
})

bot.login(process.env.token);