const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'serverinf',
    execute(client, message, args){
        //const memcount = client.guilds.get(message.guild.id).members.cache.filter(member => !member.user.bot).size;
        const serverinf = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle(`server info for ${message.guild.name}`)
        .addField("created at:", `${message.guild.createdAt.toDateString()}`)
        .addField("you joined the server at:", `${message.member.joinedAt.toDateString()}`)
        .addField("you joined discord at:" `${message.author.createdAt}`)
        .addField("Total members count:", `${message.guild.memberCount}`)
        console.log(message.member.joinedAt)
        message.reply({ embeds: [serverinf] });
    }
}
