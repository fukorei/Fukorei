module.exports = {
    name: 'afk',
    execute(client, message, args) {
        const reason = args.join(" ") || 'no reason!';
        const afk = new Map()
        afk.set(message.author.id, [Date.now(), reason]);
        message.reply(`i set your afk: ${reason}`);

        if(afk.has(message.author.id)){
            message.reply(`oh, youre back, removed your afk!`)
            afk.delete(message.author.id)
        }
    }
}