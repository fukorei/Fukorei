module.exports = {
    name: 'afk',
    execute(client, message, args) {
        const reason = args.join(" ") || 'no reason!';
        const afkreason = new Map();
        let afkrole = message.member.guild.roles.cache.find(role => role.name === "AFK");

        if(!message.member.guild.roles.cache.some(role => role.name === "AFK")){
            message.guild.members.cache.get(message.author.id).roles.add(afkrole);
            message.reply(`you are now afk: ${reason}!`);
            afkreason.set(message.author.id, reason);
        } else {
            message.guild.members.cache.get(message.author.id).roles.remove(afkrole);
            message.reply(`oh, you're back, removed your afk!`);
            afkreason.delete(message.author.id);
        }
    }
}