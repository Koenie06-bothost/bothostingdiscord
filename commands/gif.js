const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    if(!args[1]) return message.reply("You need to say witch kinda gif you want!").then(msg => msg.delete({ timeout: 10000}));

            

            var options = ["https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722", "https://tenor.com/view/bye-donald-trump-gif-5648885", "https://tenor.com/view/hi-hello-mr-bean-gif-3780800"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[1] == "bye"){

                if(result == "https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722") {
            
                    return message.channel.send(`https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722`);

                } else if(result == "https://tenor.com/view/bye-donald-trump-gif-5648885") {

                   return message.channel.send(`https://tenor.com/view/bye-donald-trump-gif-5648885`);


                } else if(result == "https://tenor.com/view/hi-hello-mr-bean-gif-3780800") {

                   return message.channel.send(`https://tenor.com/view/hi-hello-mr-bean-gif-3780800`);
                }
            }

            var options = ["https://tenor.com/view/yes-baby-goal-funny-face-gif-13347383", "https://tenor.com/view/yes-wwe-gif-7549364", "https://tenor.com/view/minions-yes-gif-4349636"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[1] == "yes"){

                if(result == "https://tenor.com/view/yes-baby-goal-funny-face-gif-13347383") {
            
                    return message.channel.send(`https://tenor.com/view/yes-baby-goal-funny-face-gif-13347383`);

                } else if(result == "https://tenor.com/view/yes-wwe-gif-7549364") {

                   return message.channel.send(`https://tenor.com/view/yes-wwe-gif-7549364`);


                } else if(result == "https://tenor.com/view/minions-yes-gif-4349636") {

                   return message.channel.send(`https://tenor.com/view/minions-yes-gif-4349636`);
                }
            }

            var options = ["https://tenor.com/view/steve-carell-no-please-no-gif-5026106", "https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946", "https://tenor.com/view/tracy-morgan-smh-shake-my-head-hell-no-no-gif-4844098"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[1] == "no"){

                if(result == "https://tenor.com/view/steve-carell-no-please-no-gif-5026106") {
            
                    return message.channel.send(`https://tenor.com/view/steve-carell-no-please-no-gif-5026106`);

                } else if(result == "https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946") {

                   return message.channel.send(`https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946`);


                } else if(result == "https://tenor.com/view/tracy-morgan-smh-shake-my-head-hell-no-no-gif-4844098") {

                   return message.channel.send(`https://tenor.com/view/tracy-morgan-smh-shake-my-head-hell-no-no-gif-4844098`);
                }
            }

            var options = ["https://tenor.com/view/lol-sheep-cute-dancing-dance-gif-7441326", "https://tenor.com/view/im-asheep-beep-beep-running-late-gif-13463115", "https://tenor.com/view/sheep-gif-4520105"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[1] == "sheep"){

                if(result == "https://tenor.com/view/lol-sheep-cute-dancing-dance-gif-7441326") {
            
                    return message.channel.send(`https://tenor.com/view/lol-sheep-cute-dancing-dance-gif-7441326`);

                } else if(result == "https://tenor.com/view/im-asheep-beep-beep-running-late-gif-13463115") {

                   return message.channel.send(`https://tenor.com/view/im-asheep-beep-beep-running-late-gif-13463115`);


                } else if(result == "https://tenor.com/view/sheep-gif-4520105") {

                   return message.channel.send(`https://tenor.com/view/sheep-gif-4520105`);
                }
            }

            var options = ["https://tenor.com/view/hendery-way-v-frog-gif-14537187", "https://tenor.com/view/h%c3%a2m-frog-toad-frog-l%e1%ba%afc-wiggle-gif-14557565", "https://tenor.com/view/muffi-bear-frog-watching-you-gif-14309915"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[1] == "frog"){

                if(result == "https://tenor.com/view/hendery-way-v-frog-gif-14537187") {
            
                    return message.channel.send(`https://tenor.com/view/hendery-way-v-frog-gif-14537187`);

                } else if(result == "https://tenor.com/view/h%c3%a2m-frog-toad-frog-l%e1%ba%afc-wiggle-gif-14557565") {

                   return message.channel.send(`https://tenor.com/view/h%c3%a2m-frog-toad-frog-l%e1%ba%afc-wiggle-gif-14557565`);


                } else if(result == "https://tenor.com/view/muffi-bear-frog-watching-you-gif-14309915") {

                   return message.channel.send(`https://tenor.com/view/muffi-bear-frog-watching-you-gif-14309915`);
                }
            }

            var options = ["https://tenor.com/view/cute-sad-tears-gif-4544076", "https://tenor.com/view/theoffice-crying-michaelscott-gif-9816214", "https://tenor.com/view/baby-crying-gif-5943733"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[1] == "sad"){

                if(result == "https://tenor.com/view/cute-sad-tears-gif-4544076") {
            
                    return message.channel.send(`https://tenor.com/view/cute-sad-tears-gif-4544076`);

                } else if(result == "https://tenor.com/view/theoffice-crying-michaelscott-gif-9816214") {

                   return message.channel.send(`https://tenor.com/view/theoffice-crying-michaelscott-gif-9816214`);


                } else if(result == "https://tenor.com/view/baby-crying-gif-5943733") {

                   return message.channel.send(`https://tenor.com/view/baby-crying-gif-5943733`);
                }
            }

            var options = ["https://tenor.com/view/jonah-hill-yay-greek-aldos-gif-7212866", "https://tenor.com/view/thumb-thumbs-up-thumbsup-gif-7585355", "https://tenor.com/view/baby-cute-smile-gif-12843681"];

            var result = options[Math.floor(Math.random() * options.length)];

            if(args[1] == "happy"){

                if(result == "https://tenor.com/view/jonah-hill-yay-greek-aldos-gif-7212866") {
            
                    return message.channel.send(`https://tenor.com/view/jonah-hill-yay-greek-aldos-gif-7212866`);

                } else if(result == "https://tenor.com/view/thumb-thumbs-up-thumbsup-gif-7585355") {

                   return message.channel.send(`https://tenor.com/view/thumb-thumbs-up-thumbsup-gif-7585355`);


                } else if(result == "https://tenor.com/view/baby-cute-smile-gif-12843681") {

                   return message.channel.send(`https://tenor.com/view/baby-cute-smile-gif-12843681`);
                }
            }

}

module.exports.help = {
    name: "gif",
    description:"dit is de Gif commando."
}