const Discord = require('discord.js');

module.exports = {
    name: "spamqa",
    description: "spam that mf",
    execute(client, message, args){
        if (message.author.bot) return;
            if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")){
                message.channel.send('mày làm gì có tuổi ping <:lul:806387931606024232>')
            } else {
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            console.log(args)
    
            if(Number.isNaN(+args[1])){
                message.channel.send('that is not a valid amount of times to ping!')
            } else {
                for(let i = 0; i < +args[1]; i++){
                    message.channel.send('<@602146178636709888>')
                }
            }
        }
    }
}