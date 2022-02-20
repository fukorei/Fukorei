const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    run: async(client, message, args, moment) => {
            message.channel.send(`${message.member.displayName}`)
        } 
}
