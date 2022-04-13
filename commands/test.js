const discord = require('discord.js')
const schema = require('../schema/afkschema')
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')

module.exports = {
    name: 'test',
    run: async(client, message, args, ms) => {
        if(!message.author.id === 732043268946133133) {
            return message.reply ("you shall not have access to this command!");
        }

        const lg1 = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle("cos đối - sin bù - phụ chéo - khác pi tan")
        .setImage("https://media.discordapp.net/attachments/606112569622659076/963795875744866354/dmlg1.png?width=319&height=405")

        message.reply({ embeds: [lg1] });
    }
}
