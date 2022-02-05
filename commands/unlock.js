const { MessageFlags } = require("discord.js")
const Discord = require('discord.js');

module.exports = {
    name: 'unlock',
    description: 'unlocks a channel',
    execute(client, message, args) {
        const role = message.guild.roles.cache.find(r => r.name === '@everyone')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) channel = message.channel;

        if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true){
            return message.channel.send(`mở rồi con gà`);
        }
        
        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: true}).catch(() => { })
        message.channel.send(`sủa đi mấy con gà con`)
    }
}
