const discord = require('discord.js')
const schema = require('../schema/afkschema')
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx');
const Map = require('discord.js');

module.exports = {
    name: 'test',
    run: async(client, message, args, ms) => {
        // message.reply("here lies new features i guess i dont fucking know how to code")

        let MessageCache = new Map();
        client.on("messageDelete",(msg) => {
            MessageCache.set(msg.guildId,msg)
        })

        let msg = MessageCache.get(message.guildId)
        message.reply(msg)
    }
}
