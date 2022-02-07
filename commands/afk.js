const { Collection } = require('discord.js');
const { afk } = require("../collection");

module.exports = {
    name: 'afk',
    execute(client, message, args) {
        const reason = args.join(" ") || 'no reason!';

        afk.set(message.author.id, [Date.now(), reason]);

        message.reply(`i set your afk: ${reason}`)
    }
}