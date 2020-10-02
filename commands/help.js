const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const moment = require("moment");
const ms = require("ms");

module.exports.run = async (client, message, args) => {

            

            var bots = message.guild.members.cache.filter(m => m.user.bot).size;
            var people = message.guild.memberCount;
            var online = message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size;
            var offline = message.guild.members.cache.filter(m => m.user.presence.status == "offline").size;

            let pages = [];
            let page = 1;

            var testEmbed = new discord.MessageEmbed()
             .setTitle('test')
             .setFooter(`Page ${page}/${pages.length}`)
            message.channel.send(testEmbed).then(msg => {
                msg.react('◀').then(r => {
                    msg.react('▶')

                    const backwardsFilter = (reaction, user) => reaction.emoji.name === ':rewind:' && user.id === message.author.id;
                    const forwardsFilter = (reaction, user) => reaction.emoji.name === ':fast_forward:' && user.id === message.author.id;

                    const backswards = msg.createReactionCollector(backwardsFilter);
                    const forwards = msg.createReactionCollector(forwardsFilter);

                    backswards.on('collect', r => {
                        if (page === 1) return;
                        page--;
                        testEmbed.setDescription(pages[page-1]);
                        testEmbed.setDescription(`Page ${page}/${pages.length}`);
                        msg.edit(testEmbed)
                    })

                    forwards.on('collect', r => {
                        if (page === pages.length) return;
                        page++;
                        testEmbed.setDescription(pages[page-1]);
                        testEmbed.setDescription(`Page ${page}/${pages.length}`);
                        msg.edit(testEmbed)
                    })
                })
            })

            // if(!args[1]){
            //     var botEmbed = new discord.MessageEmbed()
            //  .setColor("RANDOM")
            //  .setTitle("Help commands")
            //  .setDescription("You need to say something after the !help")
            //  .addField("?help commands", "With this command you can see all the normal commands")
            //  .addField("?help customcommands", "With this command you can see all the custom commands")
            //  .addField("?help serverinfo", "With this command you can see the stats of the server")
            //  .addField("?help contact", "With this command you can contact with the bot owner if you have ideas or need help with your own bot or whatever")
            //  .setImage(`https://media.discordapp.net/attachments/616315208251605005/616319462349602816/Tw.gif`)

            // return message.channel.send(botEmbed);

            // }

            // if(args[1] == "contact"){
            //     var botEmbed = new discord.MessageEmbed()
            //      .setColor("RANDOM")
            //      .setDescription(`Hey there, you want to contact me for help?
            //      Add Koenie06#1494 and i accept your friend request!
            //      I like to help you with everything (making own bot)
            //      Or you can contact me if there is a bugg with the bot
            //      Or if you have ideas for me bot and i add them! ;)`)
            //      .setImage(`https://media.discordapp.net/attachments/616315208251605005/616319462349602816/Tw.gif`)
            //     return message.channel.send(botEmbed);
            // }
            

            // if(args[1] == "commands"){
            //     var botEmbed = new discord.MessageEmbed()
            //     .setColor("RANDOM")
            //     .setTitle("Commands")
            //     .setDescription("This are all the commands of this bot!")

            //     .addField("?help (commands, customcommands)", "With this command you can see all the commands")
            //     .addField("?clear (How many messages you want to delete)", "With this command you can delete messages on a easy way")
            //     .addField("?controle (Member)", "With this command you can fully controle a player")
            //     .addField("?kick (Member)", "With this command you can kick someone out of the server")
            //     .addField("?ban (Member)", "With this command you can ban someone out of the server")
            //     .addField("?warn (Member) (Reason)", "With this command you can warn someone")
            //     .addField("?warns (member)", "With this command you can see how many warns someone has")
            //     .addField("?clearwarn (member) (1 t/m 5 or all)", "With this command you can delete warns from a user easly")
            //     .addField("?tempmute (member) (s,m,h you want to mute the member)", "With this command you can mute someone for a time")
            //     .addField("?mute (member)", "With this command you can mute someone until someone says ?unmute (member)")
            //     .addField("?unmute (member)", "With this command you can unmute someone as you did use the command ?mute (member) at someone")
            //     .addField("?message #(channel) (message)", "With this command you can let the bot send a message in a channnel")
            //     .addField("?suggest (Suggestion)", "With this command you can make a suggest and people can react with Thumps up/down")
            //     .addField("?avatar (member)", "See all the info of the member you tagged")
            //     .addField("?whois (member)", "With this command you can check info of a member")
            //     .addField("?createchannel (text/voice) (channel name)", "With this command you can create a channel")
            //     .addField("?createcategory (category name)", "With this command you can create a category channel")
            //     .addField("?deletechannel (channel/category name)", "With this command you can delete a channel/category")
            //     .addField("?createrole (role name) (color/hex code)", "With this command you can create a role")
            //     .addField("?deleterole (role name)", "With this command you can delete a role")
            //     .addField("?addrole (member) (role name)", "With this command you can add a role to a user")
            //     .addField("?removerole (member) (role name)", "With this command you can remove a role from a user")
            //     .setImage(`https://media.discordapp.net/attachments/616315208251605005/616319462349602816/Tw.gif`)

            //    return message.channel.send(botEmbed);
            // }

            // if(args[1] == "customcommands"){
            //      var botEmbed = new discord.MessageEmbed()
            //      .setTitle("Custom Commands")
            //      .setDescription("This are all the custom commands of this bot!")
            //      .setColor("RANDOM")
            //      .addField("?gif (kinda gif)", "With this custom command you can send gifs!")
            //      .addField("?sps (stone, paper, scissor)", "With this command you can play sps with the bot!")
            //      .addField("?8ball (Random question)", "With this command you can say a question and the bot answer with Yes! or No!")
            //      .addField("?dice", "Rolls a random number between 1 and 6!")
            //      .addField("?headsofcoin", "50% chance to get coin, 50% chance to get head!")
            //      .addField("?howgay (member)", "With this command you can check how gay someone is!")
            //      .addField("?calculator (number) + / - / x (number)", "With this command you can calculate a sum!")
            //      .setImage(`https://media.discordapp.net/attachments/616315208251605005/616319462349602816/Tw.gif`)


            //     return message.channel.send(botEmbed);
                
            // }

            // if(args[1] == "serverinfo"){

            //     var roles = message.guild.roles.cache.size - 1;

            //     var botEmbed = new discord.MessageEmbed()
            //      .setTitle("Serverinfo")
            //      .setDescription("This is all the info of this Server!")
            //      .addField("**Server name: **", `${message.guild}`)
            //      .addField("**Total members: **", `${people}`, true)
            //      .addField("**Total bots: **", `${bots}`, true)
            //      .addField("**Total online: **", `${online}`, true)
            //      .addField("**Total offline: **", `${offline}`, true)
            //      .addField("**Total text channels: **", `${message.guild.channels.cache.filter(channel => channel.type === 'text').size}`, true)
            //      .addField("**Total voice channels: **", `${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}`, true)
            //      .addField("**Total boosts: **", `${message.guild.premiumSubcriptionCount || '0'}`, true)
            //      .addField("**You joined the server at: **", `${moment(message.member.joinedTimestamp).format("DD-MM-YYYY [at] HH:mm")}`, true)
            //      .addField("**Server created at: **", `${moment(message.guild.createdTimestamp).format("DD-MM-YYYY [at] HH:mm")}`, true)
            //      .addField(`**Total roles [${roles}]: **`, `${message.guild.roles.cache.map(r => r).join(" ")}`)
            //      .setImage(`https://media.discordapp.net/attachments/616315208251605005/616319462349602816/Tw.gif`)
            //     return message.channel.send(botEmbed);
            // }

            // if(args[1] == "botinfo"){

            //     var botEmbed = new discord.MessageEmbed()
            //      .setTitle("botinfo")
            //      .setDescription("This is all the info of this bot!")
            //      .addField("**Bot name: **", `Koenie06`, true)
            //      .addField("**Bot owner: **", `Koenie06#1494`, true)
            //      .addField("**Bot maded at: **", `12-05-2020`, true)
            //      .addField("**You joined the server at: **", `${moment(message.member.joinedTimestamp).format("DD-MM-YYYY [at] HH:mm")}`)
            //      .addField("**Server created at: **", `${moment(message.guild.createdTimestamp).format("DD-MM-YYYY [at] HH:mm")}`)
            //      .setImage(`https://media.discordapp.net/attachments/616315208251605005/616319462349602816/Tw.gif`)
            //     return message.channel.send(botEmbed);
            // }

        



}

module.exports.help = {
    name: "help",
    description:"Dit is de help command"
}