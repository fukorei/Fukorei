const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    run: async(client, message, args, moment) => {
        const test = new Discord.MessageEmbed()
        .setColor("#ddbec3")
        .addField("test1", `this is a testbench`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
    message.reply({ embeds: [test] });
        } 
}
