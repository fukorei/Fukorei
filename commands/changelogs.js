module.exports = {
    name: "changelogs",
    description: "give access to changelog content",
    run: async (client, message) => {
        if (message.member.roles.cache.some(role => role.name === 'segs changelog'))
            return message.reply('you already have access to the changelogs channel!');

        let role = message.member.guild.roles.cache.find(role => role.name === "segs changelog");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        message.reply('you now have access to changelogs channel!');
    }
}