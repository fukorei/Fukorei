const Discord = require('discord.js');

module.exports = {
    name: 'lock',
    description: 'Locks the specified channel!',
    execute(client, message, args) {
        const role = message.guild.roles.cache.find(r => r.name === '@everyone')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) channel = message.channel;

        if(!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")) {
            return message.channel.send('m tuổi gì mà đòi lock?');
        }
        else if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false){
            return message.channel.send(`${channel} is already locked!`);
        }
        
        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: false}).catch(() => { })
        message.channel.send(`djt me chúng mày im tất hộ bố`)
    }
}