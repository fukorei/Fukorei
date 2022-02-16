const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    execute(client, message, args, moment){
        const svjoined = message.member.joinedAt
        const test = new MessageEmbed()
        .addField("test1", `${moment(svjoined).format('DD/MM/YY')}`)

        message.reply({ embeds: [test] });
    }
}