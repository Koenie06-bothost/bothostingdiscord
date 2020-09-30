const discord = require('discord.js');
const bot = new discord.Client();
const fs = require('fs');
const ms = require('ms');
const moment = require("moment");

module.exports.run = async (client, message, args) => {

    let mentionedMember = message.mentions.members.first();
    let mentionedUser = message.mentions.users.first();

    var roles = mentionedMember.roles.cache.size - 1;
    var roleNames = mentionedMember.roles.cache.map(r => r).join(" ").replace("@everyone", "");
    if(roles == 0) roleNames = "None roles"

    var status = mentionedMember.presence.status;
    if(status == 'dnd') status = "<:dnd:760898414615068672> Do Not Disturb"
    if(status == 'online') status = "<:online:760898450610061392> Online"
    if(status == 'offline') status = "<:offline:760898600510160916> Offline"
    if(status === 'idle') status = "<:idle:760900158979833916> Idle"

    const userEmbed = new discord.MessageEmbed()
     .setTitle(`All user information of **${mentionedUser.username}**:`)
     .addField(`**User Name: **`, `${mentionedUser.tag}`)
     .addField(`**User Nickname: **`, mentionedUser)
     .addField(`**User ID: **`, `${mentionedUser.id}`)
     .addField(`**User Status: **`, `${status}`)
     .addField(`**User Game: **`, `${mentionedMember.presence.activities[0] ? mentionedMember.presence.activities[0].name : "None"}`)
     .addField(`**Account Created At: **`, `${moment(mentionedUser.createdAt).format("DD-MM-YYYY [at] HH:mm")}`)
     .addField(`**Joined The Server At: **`, `${moment(mentionedMember.joinedAt).format("DD-MM-YYYY [at] HH:mm")}`)
     .addField(`**Roles [${roles}]: **`, `${roleNames}`)
    message.channel.send(userEmbed).catch(err => console.log(err));
    
}

module.exports.help = {
    name: "whois",
    description:"dit is de whois commando."
}