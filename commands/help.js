const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')

module.exports = {
    name: "help",
    description: "help menu",
    run: async(_, message, args) => {
        const help1 = new MessageEmbed()
            .setColor("#ddbec3")
            .setTitle("help menu idk man")
            .addField("segs horny", `AWOOOOOOOOOOOOGA SEGGGGGGGGGGS`)
            .addField("segs ping", `this literally exists to lmk that my bot isnt ded`)
            .addField("segs user", `shows user info`)
            .addField("segs spamqa", `spam ping the fuck out of that mf`)
            .addField("segs sadge", `sadge`)
            .addField("segs hasagi", `yasuo thong thao 7`)

        const help2 = new MessageEmbed()
            .setColor("#ddbec3")
            .setTitle("help menu idk man")
            .addField("segs changelogs", `get access to the changelogs channel`)
            .addField("segs le", `A very helpful command to make the bot send pictures of the amazing character "Fischl" from the game "Jenshin Impact"!`)
            .addField("ghe v s, ghe v dok, qua ghe gom, folontilo, emotional damage, kappa, ur mom, i will send you to jesus", `<:kekw:805463070527717376>`)

        const helppages = [help1, help2];

        pagination({
            embeds: helppages,
            channel: message.channel,
            author: message.author,
            time: 30000,
            // button: [{
            //     name: 'previous',
            //     style: 'DANGER'
            // }],
        })
    }
}