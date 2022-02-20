const ALLOWED_MEMBERS = ["840145281806368798", "732043268946133133", "480288826187710464"]

module.exports = {
    name: "spamle",
    run: async(client, message, args) => {
        if (message.author.bot) return;

        if (!ALLOWED_MEMBERS.includes(message.author.id))
            return message.reply('mày làm gì có tuổi ping <:lul:806387931606024232>');

        if (Number.isNaN(+args[0]))
            return message.reply('that is not a valid amount of times to ping!')

        if (+args[0] >= 25)
            return message.reply('listen man im hosted on heroku stop tf is wrong with you <:mikewhat:806372341629976586> ')

        for (let i = 0; i < +args[0]; i++)
            message.channel.send('<@840145281806368798>')
    }
}