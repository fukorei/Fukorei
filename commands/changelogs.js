module.exports = {
    name: "changelogs",
    description: "give access to changelog content",
    execute(_, message) {
        if (message.member.roles.cache.some(role => role.name === 'segs changelog'))
            return returnmessage.reply('you already have access to the changelogs channel!');

        let role = message.member.guild.roles.cache.find(role => role.name === "segs changelog");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        message.reply('you now have access to changelogs channel!');
    }
}