const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const coins = JSON.parse(fs.readFileSync("./coins.json", "utf8"));

module.exports.run = async (client, message, args) => {

        if(!coins[message.author.id]) coins[message.author.id] = {
            coins: 0
        };

        fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
            if(err) console.log(err);
        });

        var options = ["1", "2", "3", "4", "5", "6"]

        var result = options[Math.floor(Math.random() * options.length)];

        if(result == "1") {
            
            coins[message.author.id].coins--;

            var botEmbed = new discord.MessageEmbed() 
             .setTitle("Losed!")
             .setDescription(`You were late for work, so you losed 1 coin!
             
             Your coins now: ${coins[message.author.id].coins}`)
            message.channel.send(botEmbed)

            fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
                if(err) console.log(err);
            });

        } else if(result == "2") {

            coins[message.author.id].coins--;
            coins[message.author.id].coins--;

            var Embed = new discord.MessageEmbed() 
             .setTitle("Losed!")
             .setDescription(`You were mad to the boss, so you losed 2 coins!
             
             Your coins now: ${coins[message.author.id].coins}`)
            message.channel.send(Embed)

            fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
                if(err) console.log(err);
            });

        } else if(result == "3") {

            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;

            var embed = new discord.MessageEmbed() 
             .setTitle("Losed!")
             .setDescription(`You dropped something valuable, so you losed 3 coins!
             
             Your coins now: ${coins[message.author.id].coins}`)
            message.channel.send(embed)

            fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
                if(err) console.log(err);
            });

        } else if(result == "4") {

            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;

            var coins4 = new discord.MessageEmbed() 
             .setTitle("Losed!")
             .setDescription(`The boss was furious with you, so you losed 4 coins!
             
             Your coins now: ${coins[message.author.id].coins}`)
            message.channel.send(coins4)

            fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
                if(err) console.log(err);
            });

        } else if(result == "5") {

            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;

            var coins5 = new discord.MessageEmbed() 
             .setTitle("Losed!")
             .setDescription(`The boss was furious with you, so you losed 5 coins!
             
             Your coins now: ${coins[message.author.id].coins}`)
            message.channel.send(coins5)

            fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
                if(err) console.log(err);
            });

        } else if(result == "6") {

            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;

            var coins6 = new discord.MessageEmbed() 
             .setTitle("Losed!")
             .setDescription(`You took a knife to work and the boss figured you out, so you losed 6 coins!
             
             Your coins now: ${coins[message.author.id].coins}`)
            message.channel.send(coins6)

            fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
                if(err) console.log(err);
            });

        } else if(result == "7") {

            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;
            coins[message.author.id].coins--;

            var coins6 = new discord.MessageEmbed() 
             .setTitle("Losed!")
             .setDescription(`You took a knife to work and the boss figured you out, so you losed 7 coins!
             
             Your coins now: ${coins[message.author.id].coins}`)
            message.channel.send(coins6)

            fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
                if(err) console.log(err);
            });

        }

}

module.exports.help = {
    name: "work",
    description:"dit is de work commando."
}