const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "snipe",
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id)
        if(!msg) return message.channel.send('no message deleted')

        const embed = new MessageEmbed()
        .setTitle(`${msg.author.username} sent:`)
        .setColor("#ddbec3")
        .setDescription(`${msg.message}`)
        .setTimestamp(msg.createdAt)
        .setFooter({
            text: `Today at`,
            iconURL: msg.author.displayAvatarURL()
        })
        
        if(msg.image) embed.setImage(msg.image)
        message.channel.send({embeds: [embed]})
    }
}
