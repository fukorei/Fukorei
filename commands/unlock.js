module.exports = {
    name: 'unlock',
    description: 'unlocks a channel',
    run: async(client, message, args) => {
        const role = message.guild.roles.cache.find(r => r.name === '@everyone')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) channel = message.channel;

        if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true)
            return message.reply(`mở rồi con gà`);


        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: true }).catch(() => { })
        message.reply(`sủa đi mấy con gà con`)
    }
}