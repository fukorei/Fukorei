module.exports = {
    name: 'afk',
    execute(client, message, args, afkreason) {
        const reason = args.join(" ") || 'no reason!';

        if(!message.member.roles.cache.some(role => role.name === "AFK")){
            let role = message.member.guild.roles.cache.find(role => role.name === "AFK");
            if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
            message.reply(`you are now afk: ${reason}!`);
            afkreason.set(message.author.id, reason);
        } else {
            let role = message.member.guild.roles.cache.find(role => role.name === "AFK");
            if (role) message.guild.members.cache.get(message.author.id).roles.remove(role);
            message.reply(`oh, you're back, removed your afk!`);
            afkreason.delete(message.author.id);
        };

        // const mentioneduser = message.mentions.members.first().resolve();
        // console.log(mentioneduser);
        // if(mentioneduser.roles.cache.some(role => role.name === "AFK")){
        //     message.reply('this user is currently afk')
        // }
    }
}