module.exports = {
    name: 'remind',
    execute(client, message, args, ms) {
        if (!args) {
            message.reply("add an amount of time!")
        } else {
            const reason = args.slice(1).join(' ');
            message.reply(`i will remind you in ${args[0]}: ${reason}!`)
            setTimeout(() => {
                message.channel.send(`<@${message.author.id}> your reminder for ${reason}!`);
            }, ms(args[0]))
        }
    }
}