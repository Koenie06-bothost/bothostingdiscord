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
                    collected.first().delete()
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

                                var titleEmbed = new discord.MessageEmbed()
                                 .setTitle(`${collectedTitle}`)
                                 .setDescription(`${collectedDescription}`)
                                 .setFooter("Empty")
                                msg.edit(titleEmbed)
                                collected.first().delete()
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
                                            collected.first().delete()
                                        } else if (collected.first().content == 'none'){
                                            
                                            message.channel.send("None title setted! Say what for footer you want.")
                                        } else {
                                            
                                            var collectedColor = collected.first().content
                                            
                                            var titleEmbed = new discord.MessageEmbed()
                                            .setTitle(`${collectedTitle}`)
                                            .setDescription(`${collectedDescription}`)
                                            .setColor(`${collectedColor}`)
                                            .setFooter("Empty")
                                            msg.edit(titleEmbed)
                                            collected.first().delete()
                                            message.channel.send(`Setted the color to: **${collected.first().content}**, what do you want for footer?`).then(msg => msg.delete({ timeout: 10000}))

                                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                {max: 1}).then(collected => {
                                                    const deleteMessage = collected.first().content
                                                    if (collected.first().content == 'cancel') {
                                                        
                                                        var cancelEmbed = new discord.MessageEmbed()
                                                        .setColor("RANDOM")
                                                        .setTitle("Canceled the command")
                                                        .setDescription("I canceled the command to make a embed!")
                                                    } else if (collected.first().content == 'none'){
                                                        
                                                        message.channel.send("None title setted! Say what for Footer you want.")
                                                    } else {
                                                        
                                                        var collectedFooter = collected.first().content
                                                        
                                                        var titleEmbed = new discord.MessageEmbed()
                                                        .setTitle(`${collectedTitle}`)
                                                        .setDescription(`${collectedDescription}`)
                                                        .setColor(`${collectedColor}`)
                                                        .setFooter(`${collectedFooter}`)
                                                        msg.edit(titleEmbed)
                                                        collected.first().delete()
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
                                                                    
                                                                    message.channel.send("None Image setted! Say what for Channel you want to send the embed")

                                                                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                                        {max: 1}).then(collected => {
                                                                            const deleteMessage = collected.first().content
                                                                            if (collected.first().content == 'cancel') {
                                                                                
                                                                                var cancelEmbed = new discord.MessageEmbed()
                                                                                .setColor("RANDOM")
                                                                                .setTitle("Canceled the command")
                                                                                .setDescription("I canceled the command to make a embed!")
                                                                                return message.channel.send(cancelEmbed)
                                                                                
                                                                            } else {
                                                                                
                                                                                var channel = collected.first().content
                                                                            
                                                                                var titleEmbed = new discord.MessageEmbed()
                                                                                .setTitle(`${collectedTitle}`)
                                                                                .setDescription(`${collectedDescription}`)
                                                                                .setColor(`${collectedColor}`)
                                                                                .setFooter(`${collectedFooter}`)
                                                                                .setImage(`${collectedImage}`)
                                                                                channel.send(titleEmbed)
                                                                                
                                                                                collected.first().delete()
                                                                                message.channel.send(`Succesfully sended the message in ${collectedChannel}`).then(msg => msg.delete({ timeout: 10000}))
                                                                            }
                                                                        })
                                                                } else {
                                                                    
                                                                    var collectedImage = collected.first().content
                                                                

                                                                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                                        {max: 1}).then(collected => {
                                                                            const deleteMessage = collected.first().content
                                                                            if (collected.first().content == 'cancel') {
                                                                                
                                                                                var cancelEmbed = new discord.MessageEmbed()
                                                                                .setColor("RANDOM")
                                                                                .setTitle("Canceled the command")
                                                                                .setDescription("I canceled the command to make a embed!")
                                                                                return message.channel.send(cancelEmbed)
                                                                                
                                                                            } else {
                                                                                
                                                                                var channel = collected.first().content
                                                                            
                                                                                var titleEmbed = new discord.MessageEmbed()
                                                                                .setTitle(`${collectedTitle}`)
                                                                                .setDescription(`${collectedDescription}`)
                                                                                .setColor(`${collectedColor}`)
                                                                                .setFooter(`${collectedFooter}`)
                                                                                .setImage(`${collectedImage}`)
                                                                                channel.send(titleEmbed)
                                                                                
                                                                                collected.first().delete()
                                                                                message.channel.send(`Succesfully sended the message in ${collectedChannel}`).then(msg => msg.delete({ timeout: 10000}))
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
                }
            })
    })
    
}

module.exports.help = {
    name: "messageembed",
    description:"dit is de messageEmbed commando."
}