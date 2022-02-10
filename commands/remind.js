const ms = require('ms');

module.exports = {
    name: 'remind',
    execute(message, args) {
        if (!args[0]) {
            return message.reply("add an amount of time!")
        }

        const reason = args.slice(1).join(" ");

        if (!reason) {
            message.reply(`i will remind you in ${args[0]}!`)
            setTimeout(() => {
                message.channel.send(`<@${message.author.id}> your reminder!`);
            }, ms(`${args[0]}`))
            return;
        }
        message.reply(`i will remind you in ${args[0]}: ${reason}!`)
        setTimeout(() => {
            message.channel.send(`<@${message.author.id}> your reminder for ${reason}!`);
        }, ms(`${args[0]}`))
    }
}