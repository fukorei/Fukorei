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

        message.reply(`${Math.floor(Math.random() * args.length)}`);
    }
}

