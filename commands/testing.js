const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    execute(client, message, args){
        const svjoined = message.member.joinedAt
        const test = new MessageEmbed()
        .addField("test1", `<t:${svjoined}:d>`)

        message.reply({ embeds: [test] });
    }
}