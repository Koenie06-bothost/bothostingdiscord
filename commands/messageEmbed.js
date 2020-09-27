const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');

module.exports.run = async (client, message, args) => {

    message.channel.send(`Say what for title you want for your embed. `)
    var allembed = new discord.MessageEmbed()
     .setTitle("Empty")
     .setDescription("Empty")
     .setFooter("Empty")
    message.channel.send(allembed).then(async msg =>{

        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1}).then(collected => {
                const deleteMessage = collected.first().content.toLowerCase()
                if (collected.first().content.toLowerCase() == 'cancel') {
                    deleteMessage.delete()
                    var cancelEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("Canceled the command")
                    .setDescription("I canceled the command to make a embed!")
                    msg.edit(cancelEmbed)
                } else if (collected.first().content.toLowerCase() == 'none'){
                    deleteMessage.delete()
                    message.channel.send("None title setted! Say what for description you want.")
                } else {
                    deleteMessage.delete()
                    var collectedTitle = collected.first().content.toLowerCase()
            
                    var beginEmbed = new discord.MessageEmbed()
                     .setTitle(`${collected.first().content.toLowerCase()}`)
                     .setDescription("Empty")
                     .setFooter("Empty")
                    msg.edit(beginEmbed)
                    message.channel.send(`Setted the title to: **${collected.first().content.toLowerCase()}**, what do you want for description?`).then(msg => msg.delete({ timeout: 10000}))

                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                        {max: 1}).then(collected => {
                            const deleteMessage = collected.first().content.toLowerCase()
                            if (collected.first().content.toLowerCase() == 'cancel') {
                                deleteMessage.delete()
                                var cancelEmbed = new discord.MessageEmbed()
                                .setColor("RANDOM")
                                .setTitle("Canceled the command")
                                .setDescription("I canceled the command to make a embed!")
                                return message.channel.send(cancelEmbed)
                            } else if (collected.first().content.toLowerCase() == 'none'){
                                deleteMessage.delete()
                                message.channel.send("None description setted! Say what for hex color you want.")
                            } else {
                                deleteMessage.delete()
                                var collectedDescription = collected.first().content.toLowerCase()

                                var titleEmbed = new discord.MessageEmbed()
                                 .setTitle(`${collectedTitle}`)
                                 .setDescription(`${collectedDescription}`)
                                 .setFooter("Empty")
                                msg.edit(titleEmbed)
                                message.channel.send(`Setted the description to: **${collected.first().content.toLowerCase()}**, what do you want for hex color?`).then(msg => msg.delete({ timeout: 10000}))

                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1}).then(collected => {
                                        const deleteMessage = collected.first().content.toLowerCase()
                                        if (collected.first().content.toLowerCase() == 'cancel') {
                                            deleteMessage.delete()
                                            var cancelEmbed = new discord.MessageEmbed()
                                            .setColor("RANDOM")
                                            .setTitle("Canceled the command")
                                            .setDescription("I canceled the command to make a embed!")
                                            return message.channel.send(cancelEmbed)
                                        } else if (collected.first().content.toLowerCase() == 'none'){
                                            deleteMessage.delete()
                                            message.channel.send("None title setted! Say what for footer you want.")
                                        } else {
                                            deleteMessage.delete()
                                            var collectedColor = collected.first().content.toLowerCase()
                                            
                                            var titleEmbed = new discord.MessageEmbed()
                                            .setTitle(`${collectedTitle}`)
                                            .setDescription(`${collectedDescription}`)
                                            .setColor(`${collectedColor}`)
                                            .setFooter("Empty")
                                            msg.edit(titleEmbed)
                                            message.channel.send(`Setted the color to: **${collected.first().content.toLowerCase()}**, what do you want for footer?`).then(msg => msg.delete({ timeout: 10000}))

                                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                {max: 1}).then(collected => {
                                                    const deleteMessage = collected.first().content.toLowerCase()
                                                    if (collected.first().content.toLowerCase() == 'cancel') {
                                                        deleteMessage.delete()
                                                        var cancelEmbed = new discord.MessageEmbed()
                                                        .setColor("RANDOM")
                                                        .setTitle("Canceled the command")
                                                        .setDescription("I canceled the command to make a embed!")
                                                        return message.channel.send(cancelEmbed)
                                                    } else if (collected.first().content.toLowerCase() == 'none'){
                                                        deleteMessage.delete()
                                                        message.channel.send("None title setted! Say what for image you want.")
                                                    } else {
                                                        deleteMessage.delete()
                                                        var collectedFooter = collected.first().content.toLowerCase()
                                                        
                                                        var titleEmbed = new discord.MessageEmbed()
                                                        .setTitle(`${collectedTitle}`)
                                                        .setDescription(`${collectedDescription}`)
                                                        .setColor(`${collectedColor}`)
                                                        .setFooter(`${collectedFooter}`)
                                                        msg.edit(titleEmbed)
                                                        message.channel.send(`Setted the footer to: **${collected.first().content.toLowerCase()}**, what do you want for Image?`).then(msg => msg.delete({ timeout: 10000}))

                                                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                            {max: 1}).then(collected => {
                                                                const deleteMessage = collected.first().content.toLowerCase()
                                                                if (collected.first().content.toLowerCase() == 'cancel') {
                                                                    deleteMessage.delete()
                                                                    var cancelEmbed = new discord.MessageEmbed()
                                                                    .setColor("RANDOM")
                                                                    .setTitle("Canceled the command")
                                                                    .setDescription("I canceled the command to make a embed!")
                                                                    return message.channel.send(cancelEmbed)
                                                                } else if (collected.first().content.toLowerCase() == 'none'){
                                                                    deleteMessage.delete()
                                                                    message.channel.send("Succesfully maked the embed!")
                                                                } else {
                                                                    deleteMessage.delete()
                                                                    var collectedImage = collected.first().content.toLowerCase()
                                                                
                                                                    var titleEmbed = new discord.MessageEmbed()
                                                                    .setTitle(`${collectedTitle}`)
                                                                    .setDescription(`${collectedDescription}`)
                                                                    .setColor(`${collectedColor}`)
                                                                    .setFooter(`${collectedFooter}`)
                                                                    .setImage(`${collectedImage}`)
                                                                    msg.edit(titleEmbed)
                                                                    message.channel.send(`Setted the footer to: **${collected.first().content.toLowerCase()}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
                                                                }
                                                            })
                                                    }
                                                })
                                        }
                                    })
                            }
                        })
                }
            })
    })
}

module.exports.help = {
    name: "messageembed",
    description:"dit is de messageEmbed commando."
}