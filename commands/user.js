const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "user",
    run: async(client, message) => {
        const userinfo = new Discord.MessageEmbed()
            .setColor("#ddbec3")
            // .setAvatar(message.author.displayAvatarURL())
            .addField("Username:", `${message.author?.username}#${message.author?.discriminator}`)
            .addField("User ID:", `${message.author?.id}`)
            .addField("Created At:", `${moment(message.author.createdAt).format('ddd, DD/MM/YYYY')}`)
            .setFooter({
                text: `requested by ${message.author?.username}#${message.author?.discriminator}`,
                iconURL: message.member.displayAvatarURL()
            })
        message.reply({ embeds: [userinfo] });
    }
};
