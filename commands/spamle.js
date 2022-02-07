module.exports = {
    name: "spamle",
    description: "spam mf le kek",
    execute(client,message,args,prefix){
        if (message.author.bot) return;
        var allowedids = ["840145281806368798","732043268946133133","480288826187710464"]
        if (!allowedids.includes(message.author.id)){
            message.reply('mày làm gì có tuổi ping <:lul:806387931606024232>')
        } else {

        if(Number.isNaN(+args[0])){
            message.reply('that is not a valid amount of times to ping!')
        } else {
            if (+args[0] >= 25){
                message.reply('listen man im hosted on heroku stop tf is wrong with you <:mikewhat:806372341629976586> ')
            } else {
            for(let i = 0; i < +args[0]; i++){
                message.channel.send('<@840145281806368798>')
            }
        }
    }
    }
}
}
