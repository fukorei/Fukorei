module.exports = {
    name: 'afk',
    execute(client, message, args) {
        const reason = args.join(" ") || 'no reason!';
        const afkreason = new Map();

        if(message.member.guild.roles.cache.some(role => role.name === "AFK")){
            let role = message.member.guild.roles.cache.find(role => role.name === "AFK");
            if (role) message.guild.members.cache.get(message.author.id).roles.remove(afkrole);
            message.reply(`oh, you're back, removed your afk!`);
            afkreason.delete(message.author.id);
        } else {
            let role = message.member.guild.roles.cache.find(role => role.name === "AFK");
            if (role) message.guild.members.cache.get(message.author.id).roles.add(afkrole);
            message.reply(`you are now afk: ${reason}!`);
            afkreason.set(message.author.id, reason);
        }
    }
}