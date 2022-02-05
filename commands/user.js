const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: "user",
    description: "User info",
    execute(client, message, channel){
        console.log(message.author)
        const Embed = new Discord.MessageEmbed()
        .setColor("#ddbec3")
        // .setAvatar(message.author.displayAvatarURL())
        .addField("Username:", `${message.author?.username}#${message.author?.discriminator}`)
        .addField("User ID:", `${message.author?.id}`)
        .addField("Created At:", `${message.author?.createdAt}`)
        message.channel.send({ embeds: [Embed] });
        console.log(message.channel)
    }
};