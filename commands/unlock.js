const { MessageFlags } = require("discord.js")

module.exports = {
    name: 'unlock',
    description: 'unlocks a channel',
    async execute(Client, message, args) {
        const prefix ='segs ';
        if(!message.member.hasPermission("ADMINISTRATOR")) return
        const role = message.guild.roles.cache.find(r => r.name === '@everyone')
        let channel = message.mentions.channels.first || message.guild.channels.cache.get(args[0])
        if (!channel) channel = message.channel;

        if(channel.permissionFor(message.guild.id).has('SEND_MESSAGE') === false){
            return message.channel.send(`${channel} is already unlocked!`);
        }
        await channel.updateOverwrite(message.guild.id, { SEND_MESSAGE: false }).catch(() => { })
        await channel.updateOverwrite(role, { SEND_MESSAGE: false }).catch(() => { })
        message.channel.send(`${channel} is now unlocked!`)
    }
}
