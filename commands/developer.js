module.exports = {
    name: 'developer',
    run: async(client, message, args) => {
    if(message.author.id !== "732043268946133133") return message.reply("you are not the bot dev!");
    console.log("developer args:" + args);
    if(args[0] === "spameveryone"){
        if(message.channel.id !== "921394718376611850") return message.reply("no");
        for(let i = 0; i<=10; i++){
            message.channel.send("@everyone")
        }
    }

    //new code here.
}
}