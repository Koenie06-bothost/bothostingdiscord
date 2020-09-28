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
                const deleteMessage = collected.first().content
                if (collected.first().content == 'cancel') {
                    
                    var cancelEmbed = new discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("Canceled the command")
                    .setDescription("I canceled the command to make a embed!")
                    msg.edit(cancelEmbed)
                } else if (collected.first().content == 'none'){
                    
                    message.channel.send("None title setted! Say what for description you want.")
                } else {
                    
                    var collectedTitle = collected.first().content
            
                    var beginEmbed = new discord.MessageEmbed()
                     .setTitle(`${collected.first().content}`)
                     .setDescription("Empty")
                     .setFooter("Empty")
                    msg.edit(beginEmbed)
                    message.channel.send(`Setted the title to: **${collected.first().content}**, what do you want for description?`).then(msg => msg.delete({ timeout: 10000}))

                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                        {max: 1}).then(collected => {
                            const deleteMessage = collected.first().content
                            if (collected.first().content == 'cancel') {
                                
                                var cancelEmbed = new discord.MessageEmbed()
                                .setColor("RANDOM")
                                .setTitle("Canceled the command")
                                .setDescription("I canceled the command to make a embed!")
                                return message.channel.send(cancelEmbed)
                            } else if (collected.first().content == 'none'){
                                
                                message.channel.send("None description setted! Say what for hex color you want.")
                            } else {
                                
                                var collectedDescription = collected.first().content

                                if(!collectedTitle) {
                                    var titleEmbed = new discord.MessageEmbed()
                                    .setDescription(`${collectedDescription}`)
                                    .setFooter("Empty")
                                    msg.edit(titleEmbed)
                                    message.channel.send(`Setted the description to: **${collected.first().content}**, what do you want for hex color?`).then(msg => msg.delete({ timeout: 10000}))
                                }

                                var titleEmbed = new discord.MessageEmbed()
                                 .setTitle(`${collectedTitle}`)
                                 .setDescription(`${collectedDescription}`)
                                 .setFooter("Empty")
                                msg.edit(titleEmbed)
                                message.channel.send(`Setted the description to: **${collected.first().content}**, what do you want for hex color?`).then(msg => msg.delete({ timeout: 10000}))

                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1}).then(collected => {
                                        const deleteMessage = collected.first().content
                                        if (collected.first().content == 'cancel') {
                                            
                                            var cancelEmbed = new discord.MessageEmbed()
                                            .setColor("RANDOM")
                                            .setTitle("Canceled the command")
                                            .setDescription("I canceled the command to make a embed!")
                                            return message.channel.send(cancelEmbed)
                                        } else if (collected.first().content == 'none'){
                                            
                                            message.channel.send("None color setted! Say what for footer you want.")
                                        } else {
                                            
                                            var collectedColor = collected.first().content


                                            if(!collectedTitle && collectedDescription) {
                                                var titleEmbed = new discord.MessageEmbed()
                                                .setFooter("Empty")
                                                msg.edit(titleEmbed)
                                                message.channel.send(`Setted the description to: **${collected.first().content}**, what do you want for footer?`).then(msg => msg.delete({ timeout: 10000}))
                                            }

                                            if(!collectedDescription){
                                                var titleEmbed = new discord.MessageEmbed()
                                                .setTitle(`${collectedTitle}`)
                                                .setColor(`${collectedColor}`)
                                                .setFooter("Empty")
                                                msg.edit(titleEmbed)
                                                message.channel.send(`Setted the color to: **${collected.first().content}**, what do you want for footer?`).then(msg => msg.delete({ timeout: 10000}))
                                            }

                                            if(!collectedTitle) {
                                                var titleEmbed = new discord.MessageEmbed()
                                                .setDescription(`${collectedDescription}`)
                                                .setFooter("Empty")
                                                msg.edit(titleEmbed)
                                                message.channel.send(`Setted the description to: **${collected.first().content}**, what do you want for footer?`).then(msg => msg.delete({ timeout: 10000}))
                                            }

                                            
                                            var titleEmbed = new discord.MessageEmbed()
                                            .setTitle(`${collectedTitle}`)
                                            .setDescription(`${collectedDescription}`)
                                            .setColor(`${collectedColor}`)
                                            .setFooter("Empty")
                                            msg.edit(titleEmbed)
                                            message.channel.send(`Setted the color to: **${collected.first().content}**, what do you want for footer?`).then(msg => msg.delete({ timeout: 10000}))

                                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                {max: 1}).then(collected => {
                                                    const deleteMessage = collected.first().content
                                                    if (collected.first().content == 'cancel') {
                                                        
                                                        var cancelEmbed = new discord.MessageEmbed()
                                                        .setColor("RANDOM")
                                                        .setTitle("Canceled the command")
                                                        .setDescription("I canceled the command to make a embed!")
                                                        return message.channel.send(cancelEmbed)
                                                    } else if (collected.first().content == 'none'){
                                                        
                                                        message.channel.send("None title setted! Say what for image you want.")
                                                    } else {

                                                        if(!collectedTitle && collectedDescription && collectedColor) {
                                                            var titleEmbed = new discord.MessageEmbed()
                                                            .setFooter("Empty")
                                                            msg.edit(titleEmbed)
                                                            message.channel.send(`Setted the footer to: **${collected.first().content}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
                                                        }

                                                        if(!collectedColor){
                                                            var titleEmbed = new discord.MessageEmbed()
                                                            .setTitle(`${collectedTitle}`)
                                                            .setColor(`${collectedColor}`)
                                                            .setFooter("Empty")
                                                            msg.edit(titleEmbed)
                                                            message.channel.send(`Setted the color to: **${collected.first().content}**, what do you want for image?`).then(msg => msg.delete({ timeout: 10000}))
                                                        }
            
                                                        if(!collectedDescription){
                                                            var titleEmbed = new discord.MessageEmbed()
                                                            .setTitle(`${collectedTitle}`)
                                                            .setColor(`${collectedColor}`)
                                                            .setFooter("Empty")
                                                            msg.edit(titleEmbed)
                                                            message.channel.send(`Setted the footer to: **${collected.first().content}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
                                                        }
            
                                                        if(!collectedTitle) {
                                                            var titleEmbed = new discord.MessageEmbed()
                                                            .setDescription(`${collectedDescription}`)
                                                            .setFooter("Empty")
                                                            msg.edit(titleEmbed)
                                                            message.channel.send(`Setted the footer to: **${collected.first().content}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
                                                        }
                                                        
                                                        var collectedFooter = collected.first().content
                                                        
                                                        var titleEmbed = new discord.MessageEmbed()
                                                        .setTitle(`${collectedTitle}`)
                                                        .setDescription(`${collectedDescription}`)
                                                        .setColor(`${collectedColor}`)
                                                        .setFooter(`${collectedFooter}`)
                                                        msg.edit(titleEmbed)
                                                        message.channel.send(`Setted the footer to: **${collected.first().content}**, what do you want for Image?`).then(msg => msg.delete({ timeout: 10000}))

                                                        message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                            {max: 1}).then(collected => {
                                                                const deleteMessage = collected.first().content
                                                                if (collected.first().content == 'cancel') {
                                                                    
                                                                    var cancelEmbed = new discord.MessageEmbed()
                                                                    .setColor("RANDOM")
                                                                    .setTitle("Canceled the command")
                                                                    .setDescription("I canceled the command to make a embed!")
                                                                    return message.channel.send(cancelEmbed)
                                                                } else if (collected.first().content == 'none'){
                                                                    
                                                                    message.channel.send("Succesfully maked the embed! In which channel do you want to send?")
                                                                } else {
                                                                    
                                                                    var collectedImage = collected.first().content

                                                                    if(!collectedTitle && collectedDescription && collectedColor && collectedFooter) {
                                                                        var titleEmbed = new discord.MessageEmbed()
                                                                        .setImage(`${collectedImage}`)
                                                                        msg.edit(titleEmbed)
                                                                        message.channel.send(`Setted the description to: **${collected.first().content}**, what do you want for image?`).then(msg => msg.delete({ timeout: 10000}))
                                                                    }
            
                                                                    if(!collectedColor){
                                                                        var titleEmbed = new discord.MessageEmbed()
                                                                        .setTitle(`${collectedTitle}`)
                                                                        .setFooter("Empty")
                                                                        msg.edit(titleEmbed)
                                                                        message.channel.send(`Setted the footer to: **${collected.first().content}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
                                                                    }
                        
                                                                    if(!collectedDescription){
                                                                        var titleEmbed = new discord.MessageEmbed()
                                                                        .setTitle(`${collectedTitle}`)
                                                                        .setColor(`${collectedColor}`)
                                                                        .setFooter("Empty")
                                                                        msg.edit(titleEmbed)
                                                                        message.channel.send(`Setted the footer to: **${collected.first().content}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
                                                                    }
                        
                                                                    if(!collectedTitle) {
                                                                        var titleEmbed = new discord.MessageEmbed()
                                                                        .setDescription(`${collectedDescription}`)
                                                                        .setFooter("Empty")
                                                                        msg.edit(titleEmbed)
                                                                        message.channel.send(`Setted the footer to: **${collected.first().content}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
                                                                    }

                                                                    if(!collectedFooter){
                                                                        var titleEmbed = new discord.MessageEmbed()
                                                                        .setDescription(`${collectedDescription}`)
                                                                        msg.edit(titleEmbed)
                                                                        message.channel.send(`Setted the footer to: **${collected.first().content}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
                                                                    }
                                                                
                                                                    var titleEmbed = new discord.MessageEmbed()
                                                                    .setTitle(`${collectedTitle}`)
                                                                    .setDescription(`${collectedDescription}`)
                                                                    .setColor(`${collectedColor}`)
                                                                    .setFooter(`${collectedFooter}`)
                                                                    .setImage(`${collectedImage}`)
                                                                    msg.edit(titleEmbed)
                                                                    message.channel.send(`Setted the footer to: **${collected.first().content}**, Succesfully made the embed!`).then(msg => msg.delete({ timeout: 10000}))
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