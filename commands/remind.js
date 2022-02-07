module.exports = {
    name: 'remind',
    execute(client, message, args, ms) {
        if (!args) {
            return message.reply("add an amount of time!") 
        }
        
        console.log(args)
        //const reason = args.slice(1).join(" ");
        message.reply(`i will remind you in ${args[0]}: ${reason}!`)
        setTimeout(() => {
            message.channel.send(`<@${message.author.id}> your reminder for ${reason}!`);
        }, ms(args[0]))
    }
}
