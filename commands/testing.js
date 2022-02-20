const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    run: async(client, message, args, moment) => {
        const me = ["732043268946133133"]

        if(!me.includes(message.author.id)) return;

        const svjoined = message.member.joinedAt
        const test = new MessageEmbed()
        .addField("test1", `${moment(svjoined).format('DD/MM/YY')}`)

        message.reply({ embeds: [test] });
    }
}