const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: "user",
    run: async(client, message) => {
        const userinfo = new Discord.MessageEmbed()
            .setColor("#ddbec3")
            // .setAvatar(message.author.displayAvatarURL())
            .addField("Username:", `${message.author?.username}#${message.author?.discriminator}`)
            .addField("User ID:", `${message.author?.id}`)
            .addField("Created At:", `${message.author?.createdAt.toDateString()}`)
        message.reply({ embeds: [userinfo] });
    }
};
