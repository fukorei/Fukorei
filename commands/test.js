const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    run: async(client, message, args, moment) => {
        let timenow = moment().millisecond(Date.now())
        message.channel.send(`${timenow}`)

        let twentyfourhours = ms('23h59m')
        message.channel.send(`${twentyfourhours}`)


}
}
