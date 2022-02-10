const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "user",
    description: "User info",
    execute(message) {
        const Embed = MessageEmbed()
            .setColor("#ddbec3")
            // .setAvatar(message.author.displayAvatarURL())
            .addField("Username:", `${message.author?.username}#${message.author?.discriminator}`)
            .addField("User ID:", `${message.author?.id}`)
            .addField("Created At:", `${message.author?.createdAt}`)
        message.reply({ embeds: [Embed] });
    }
};