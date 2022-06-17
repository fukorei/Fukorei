module.exports = {
    name: "spam",
    run: async(client, message, args) => {
        let ping = message.mentions.users.first();
        if(message.author.bot) return;
        if(!message.member.permissionsIn(message.channel).has("ADMINISTRATOR"))
            return message.reply('mày làm gì có tuổi ping <:lul:806387931606024232>')

        if (Number.isNaN(+args[0]))
            return message.reply('that is not a valid amount of times to ping!')

        if (+args[0] > 25)
            return message.reply('listen man im hosted on heroku stop tf is wrong with you <:mikewhat:806372341629976586> ')

        for (let i = 0; i < +args[0]; i++)
            message.channel.send(`<@${ping.id}>`)
    }
}