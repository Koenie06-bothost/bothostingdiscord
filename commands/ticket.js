const discord = require('discord.js');
const { create } = require('domain');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    const categoryID = "755084752855367820"

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var ticketBestaat = false;

    const channel = message.member.guild.categoryID.find(c => c.name == "Tickets")

    if(!channel) return;

    message.guild.channels.cache.forEach(channel => {

        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){
            ticketBestaat = true;

            var botEmbed = new discord.MessageEmbed()
             .setColor("#ff0000")
             .setDescription(`You already have a open ticket!`)
            message.channel.send(botEmbed)

            return;
        }

    });

    if(ticketBestaat) return;

    var embed = new discord.MessageEmbed()
     .setTitle("Making a ticket...")
     .setDescription(`Succesfully maked the ticket!`)
    message.channel.send(embed);

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
        (createdChannel) => {
            createdChannel.setParent(categoryID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'),{
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });

                    settedParent.updateOverwrite(message.author.id,{
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                    });

                    var embedParent = new discord.MessageEmbed()
                     .setTitle(`${message.author.username} your ticket is created!`)
                     .setDescription("Say here your question!")
                    settedParent.send(embedParent);


                }
            ).catch(err => {
                var botEmbed = new discord.MessageEmbed()
                 .setTitle("Error error...")
                 .setDescription(`There was a fault to make the ticket...
                 Try it again!`)
                message.channel.send(botEmbed)
            });
        }
    )

}

module.exports.help = {
    name: "ticket",
    description:"dit is de ticket commando."
}