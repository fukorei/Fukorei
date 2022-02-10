module.exports = {
    name: 'afk',
    execute(client, message, args) {
        const reason = args.join(" ") || 'no reason!';
        const afkreason = new Map();

        if(!message.member.roles.cache.some(role => role.name === "AFK")){
            let role = message.member.guild.roles.cache.find(role => role.name === "AFK");
            if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
            message.reply(`you are now afk: ${reason}!`);
            // afkreason.delete(message.author.id);
        } else {
            let role = message.member.guild.roles.cache.find(role => role.name === "AFK");
            if (role) message.guild.members.cache.get(message.author.id).roles.remove(role);
            message.reply(`oh, you're back, removed your afk!`);
            // afkreason.set(message.author.id, reason);
        };

        const mentioneduser = message.mentions.members.first();
        console.log(mentioneduser);
        if(mentioneduser.roles.cache.some(role => role.name === "AFK")){
            message.reply('this user is currently afk')
        }
    }
}