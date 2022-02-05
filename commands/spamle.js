module.exports = {
    name: "spamle",
    description: "help menu",
    execute(client,message,args,prefix){
        if (message.author.bot) return;
        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")){
            message.channel.send('mày làm gì có tuổi ping <:lul:806387931606024232>')
        } else {
        console.log(args)
        args.shift()

        if(Number.isNaN(+args)){
            message.channel.send('that is not a valid amount of times to ping!')
        } else {
            for(let i = 0; i < +args; i++){
                message.channel.send('<@840145281806368798>')
            }
        }
        }
    }
}