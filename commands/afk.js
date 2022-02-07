module.exports = {
    name: 'afk',
    description: 'afk command',
    execute(client, message, args) {
        message.reply(`i set your afk: ${args.join(" ")}`)

        if(message.author){
            message.channel.send(` <@${message.author.id}>, you are no longer afk!`)
        }
    }
}