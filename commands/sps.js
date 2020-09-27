const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!args[1]) return message.reply("You need to say: !sps <stone, paper, scissor>").then(msg => msg.delete({ timeout: 10000}))

            var options = ["stone", "paper", "scissor"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[1] == "stone"){

                if(result == "stone") {
            
                    return message.channel.send(`I have ${result} :moyai:, It's draw!`);

                } else if(result == "paper") {

                   return message.channel.send(`I have ${result} :notepad_spiral:, I win!`);


                } else if(result == "scissor") {

                   return message.channel.send(`I have ${result} :scissors:, You win!`);
                }
            }
            else if(args[1] == "paper"){

                if(result == "stone") {
            
                    return message.channel.send(`I have ${result} :moyai:, You win!`);

                } else if(result == "paper") {

                   return message.channel.send(`I have ${result} :notepad_spiral:, It's draw!`);


                } else if(result == "scissor") {

                   return message.channel.send(`I have ${result} :scissors:, I win!`);
                }
            }
            else if(args[1] == "scissor"){

                if(result == "stone") {
            
                    return message.channel.send(`I have ${result} :moyai:, I win!`);

                } else if(result == "paper") {

                   return message.channel.send(`I have ${result} :notepad_spiral:, You win!`);


                } else if(result == "scissor") {

                   return message.channel.send(`I have ${result} :scissors:, It's draw!`);
                }
            }
        

}

module.exports.help = {
    name: "sps",
    description:"dit is de Sps commando."
}