const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinf',
    run: async(client, message, args, moment) => {
        //const memcount = client.guilds.get(message.guild.id).members.cache.filter(member => !member.user.bot).size;
        const serverinf = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle(`server info for ${message.guild.name}`)
        .addField("created at:", `${moment(message.guild.createdAt).format('ddd, DD/MM/YYYY')}`)
        .addField("you joined the server at:", `${moment(message.member.joinedAt).format('ddd, DD/MM/YYYY')}`)
        .addField("you joined discord at:", `${moment(message.author.createdAt).format('ddd, DD/MM/YYYY')}`)
        .addField("Total members count:", `${message.guild.memberCount}`)
        console.log(message.member.joinedAt)
        message.reply({ embeds: [serverinf] });
    }
}
