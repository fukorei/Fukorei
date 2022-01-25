const Discord = require('discord.js');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'lock',
    description: 'Locks the specified channel!',
    execute(message, args, channel) {
        if (!message.member.hasPermissions('ADMINISTRATOR'))
            return message.reply('<:nomark:791577754659192832> You dont have the necessary permissions to use this command!');
        if (!args[0])
            return message.reply('<:nomark:791577754659192832> You need to mention a channel!');
        if (!message.mentions.channels.first())
            return message.reply('<:nomark:791577754659192832> You need to mention VALID a channel!');

        const role = member.roles.cache.some(role => role.name === "@everyone");
        if (!role) return message.channel.send('Role is not able to be found.')

        message.mentions.channels.forEach(channel => {
            if (channel.name.startsWith("🔒"))
                return message.channel.send(`<#${channel.id}> is already locked!`)
            channel.setName(`🔒${channel.name}`);
            try {
                channel.permissionOverwrites(role, {
                    SEND_MESSAGES: false
                });
                message.channel.send(`<#${channel.id}> has been locked!`);
            } catch (err) {
                console.log(err);
                message.channel.send(`Something has went wrong when locking the channels.`);
            }
        })

        channel.updateOverwrite(message.author, {
            SEND_MESSAGES: false
        })
    }
}