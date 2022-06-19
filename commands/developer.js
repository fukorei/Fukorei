module.exports = {
    name: 'dev',
    run: async(client, message, args) => {
    if(message.author.id !== "732043268946133133") return message.reply("you are not the bot dev!");

    if(!args[0]) return message.reply("missing arguments.")
    
    if(args[0] === "spam.everyone"){
        if(message.channel.id !== "921394718376611850") return message.reply("no");
        for(let i = 0; i<5; i++){
            message.channel.send("@everyone")
        }
    }

    //new code here.
}
}