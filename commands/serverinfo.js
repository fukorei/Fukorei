const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinf',
    execute(client, message, args){
        //const memcount = client.guilds.get(message.guild.id).members.cache.filter(member => !member.user.bot).size;
        const serverinf = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle(`Server info for ${message.guild.name}`)
        .addField("Created at:", `${message.guild.createdAt.toDateString()}`)
        .addField("You joined at:", `${message.author.joinedAt}`)
        .addField("Total members count:", `${message.guild.memberCount}`)
        message.reply({ embeds: [serverinf] });
    }
}
