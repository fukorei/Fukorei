const Discord = require('discord.js');

module.exports = {
    name: "spamqa",
    description: "spam that mf",
    execute(client, message, args, prefix){
        if (message.author.bot) return;
            if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")){
                message.channel.send('mày làm gì có tuổi ping <:lul:806387931606024232>')
            } else {
            console.log(args)
    
            if(Number.isNaN(+args[0])){
                message.channel.send('that is not a valid amount of times to ping!')
            } else {
                for(let i = 0; i < +args[0]; i++){
                    message.channel.send('<@602146178636709888>')
                }
            }
        }
    }
}