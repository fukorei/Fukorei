const discord = require('discord.js')
const schema = require('../schema/afkschema')
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')

module.exports = {
    name: 'test',
    run: async(client, message, args, ms) => {
        if(message.author.id !== '732043268946133133') {
            return message.reply ("you shall not have access to this command!");
        }

        let newname = args.join(" ")
        if(message.member.voice) {
            message.member.voice.channel.setName(`${newname}`)
            message.reply(`channel name changed to ${newname}`)
        } else {
            let channel = message.channel
            channel.setName(`${newname}`)
            message.reply(`channel name changed to ${newname}`)
        }
    }
}
