const Discord = require('discord.js');
const botConfig = require("./botConfig.json")
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const ms = require("ms");
const fs = require("fs");
const { error } = require('console');

const levelFile = require('./levels.json')

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

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var randomXP = Math.floor(Math.random(1) * 10) + 1;

    var idUser = message.author.id;

    if(!levelFile[idUser]){
        levelFile[idUser] = {

            xp: 0,
            level: 1
        }
    }

    fs.writeFile("./levels.json", JSON.stringify(levelFile), err => {
        if(err) return console.log(err)
    });

    levelFile[idUser].xp += randomXP;

    var levelUser = levelFile[idUser].level;
    var xpUser = levelFile[idUser].xp
    var nextLevel = levelUser * 300;

    if(xpUser >= nextLevel){

        levelFile[idUser].level += 1;

        fs.writeFile("./levels.json", JSON.stringify(levelFile), err => {
            if(err) return console.log(err)
        });

        message.channel.send(`GG ${message.author}, You've reached level ${levelFile[idUser].level}`);
    }

    fs.writeFile("./levels.json", JSON.stringify(levelFile), err => {
        if(err) return console.log(err)
    });

    var prefix = botConfig.prefix;

    let args = message.content.slice(prefix.length).split(" ");
    var msg = message.content.toLowerCase();
    var messageArray = message.content.split(" ");
    var command = messageArray[0];
    var commands = bot.commands.get(command.slice(prefix.length));
    if(commands) commands.run(bot,message, args);

    for (let i = 0; i < swearWords.length; i++) {
        
        if (msg.includes(swearWords[i])){
    
            message.delete();
    
            return message.reply("Please don't swear!").then(msg => msg.delete({timeout: 5000}));
        }
    }
    
    if(!message.content.startsWith(prefix)) return; 

    

    switch(args[0]){
        case 'offline':
            if (message.author.id === "594601571292020759") {
                console.log(`You setted Koenie06#7201 offline`)
                bot.destroy();
            }
        break;

        case 'status':
            const content = message.conent.replace('?status ', '')

            bot.user.setPresence({
                activity: {
                    name: content,
                    type: 0,
                }
            })
        break;
    };
})

bot.login(process.env.token);