const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    run: async(client, message, args, moment) => {
            message.channel.send(`${message.guild.displayName}\n${message.member.displayName}\n${message.guild.member.displayName}`)
        } 
}