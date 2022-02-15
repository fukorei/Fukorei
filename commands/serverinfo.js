const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinf',
    execute(client, message, args){
        const serverinf = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle(`Server info for ${message.guild.name}`)
        .addField("Created at:", `${message.guild.createdAt.toDateString()}`)
        .addField("You joined at:", `${message.guild.joinedAt.toDateString()}`)
        .addField("Total members count:", `${message.guild.memberCount}`)
    }
}