const { MessageEmbed } = require('discord.js');
const memcount = client.guilds.get(message.guild.id).members.cache.filter(member => !member.user.bot).size;

module.exports = {
    name: 'serverinf',
    execute(client, message, args){
        const serverinf = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle(`Server info for ${message.guild.name}`)
        .addField("Created at:", `${message.guild.createdAt.toDateString()}`)
        .addField("You joined at:", `${message.guild.joinedTimestamp}`)
        .addField("Total members count:", `${memcount}`)
        message.reply({ embeds: [serverinf] });
    }
}
