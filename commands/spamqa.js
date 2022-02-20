module.exports = {
    name: "spamqa",
    run: async(client, message, args) => {
        if (message.author.bot) return;

        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR"))
            return message.reply('mày làm gì có tuổi ping <:lul:806387931606024232>')

        if (Number.isNaN(+args[0]))
            return message.reply('that is not a valid amount of times to ping!')

        for (let i = 0; i < +args[0]; i++)
            message.channel.send('<@602146178636709888>')
    }
}