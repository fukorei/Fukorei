const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "user",
    run: async(client, message) => {
        const user = message.mentions.users.first() || message.author;
        const userinfo = new Discord.MessageEmbed()
            .setColor("#ddbec3")
            // .setAvatar(message.author.displayAvatarURL())
            .addField("Username:", `${user.username}#${user.discriminator}`)
            .addField("User ID:", `${user.id}`)
            .addField("Created At:", `${moment(user.createdAt).format('ddd, DD/MM/YYYY')}`)
            .setFooter({
                text: `requested by ${user.username}#${user.discriminator}`,
                iconURL: user.displayAvatarURL()
            })
        message.reply({ embeds: [userinfo] });
    }
};
