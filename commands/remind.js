module.exports = {
    name: 'remind',
    run: async(client, message, args, ms) => {
        const reason = args.slice(1).join(" ");
        const time = message.content.slice(3,4)
        console.log(time)

        if (!args[0]) {
            return message.reply("add an amount of time!")
        }

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