module.exports = {
    name: 'afk',
    execute(client, message, args) {
        const reason = args.join(" ") || 'no reason!';
        const afk = new Map()
        afk.set(message.author.id, [Date.now(), reason]);

        if(!afk.has(message.author.id)){
            // afk.set(message.author.id, [Date.now(), reason]);
            return message.reply(`i set your afk: ${reason}`);
        } else {
            afk.delete(message.author.id)
            return message.reply(`oh, youre back, removed your afk!`)
        }
    }
}