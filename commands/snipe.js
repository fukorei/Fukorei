const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "snipe",
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send('no message deleted')

        const embed = new MessageEmbed()
        .setDescription(`${msg.author} said: ${msg.content}`)
        .setTimestamp(msg.createdAt)
        
        if(msg.image) embed.setImage(msg.image)
        message.channel.send({embeds: [embed]})
    }
}
