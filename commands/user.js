const { MessageEmbed } = require('discord.js');
const { Discord } = require('discord.js');

module.exports = {
    name: "user",
    execute(client, message) {
        const Embed = new Discord.MessageEmbed()
            .setColor("#ddbec3")
            // .setAvatar(message.author.displayAvatarURL())
            .addField("Username:", `${message.author?.username}#${message.author?.discriminator}`)
            .addField("User ID:", `${message.author?.id}`)
            .addField("Created At:", `${message.author?.createdAt}`)
        message.reply({ embeds: [Embed] });
    }
};