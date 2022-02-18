module.exports = {
    name: "say",
    description: "say a message",
    execute(client,message,args){
        if (message.author.bot) return;
        
        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")) return;

        if(!args.length) return message.channel.send("what do you want me to say <:mikewhat:806372341629976586>");
        message.channel.send(args.join(" "));
        message.delete()
    }
}