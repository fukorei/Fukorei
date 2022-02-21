const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    run: async(client, message, args, moment) => {
        moment().millisecond(Date.now())
        message.channel.send(`${timenow}`)

        message.channel.send(`23 hours in ms:${ms('23h')}\n59 minutes in ms:${ms('59m')}\nwhat if i add them both?: ${ms('23h') + ms('59m')}`)


}
}
