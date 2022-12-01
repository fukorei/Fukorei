const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')

module.exports = {
    name: "help",
    description: "help menu",
    run: async(client, message, args) => {
        if(args[0] === "airlines"){
            if(message.guild.id !== '606112569622659072'){
                return message.reply ("you shall not have access to enter the secret commands of me!");
            } 
            
            const help1 = new MessageEmbed()
                .setColor("#ddbec3")
                .setTitle("help menu idk man")
                .addField("f sex", `AWOOOOOOOOOOOOGA SEGGGGGGGGGGS`)
                .addField("f ping", `this literally exists to lmk that my bot isnt ded`)
                .addField("f user", `shows user info`)
                .addField("f spam", `pinging intesifies`)
                .addField("f sadge", `sadge`)
                .addField("f hasagi", `yasuo thong thao 7`)
    
            const help2 = new MessageEmbed()
                .setColor("#ddbec3")
                .setTitle("help menu idk man")
                .addField("f changelogs", `get access to the changelogs channel`)
                .addField("f le", `A very helpful command to make the bot send pictures of the amazing character "Fischl" from the game "Genshit Impact"!`)
                .addField("ghe v s, ghe v dok, qua ghe gom, folontilo, emotional damage, kappa, ur mom, i will send you to jesus", `<:kekw:805463070527717376>`)
    
            const helppages = [help1, help2];
    
            pagination({
                embeds: helppages,
                channel: message.channel,
                author: message.author,
                time: 30000,
            })

        } else {
            
            const help3 = new MessageEmbed()
            .setColor("#ddbec3")
            .setTitle("Help menu")
            .addField("f ping", `the classic ping pong command!`)
            .addField("f serverinfo/svinf", `shows some info about the server!`)
            .addField("f user", `shows some info about the user!`)
            .addField("f lock & f unlock", `locks and unlocks a channel!`)
            .addField("f remind", `to remind you about something!`)
            .addField("f afk", `makes you afk!`)

            const publichelppages = [help3];
            
            pagination({
                embeds: publichelppages,
                channel: message.channel,
                author: message.author,
                time: 30000,
            })
        }
    }
}