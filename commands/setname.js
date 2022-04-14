module.exports = {
    name: "setname",
    run: async(message, args) => {
        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")) return;

        if(args[0] === "vc"){
            let channel = message.member.voice.channel;
            args.shift();
            let newname = args.join(" ");
            if(!newname) return message.reply("you need to specify a new name!")
            message.member.voice.channel.setName(`${newname}`)
            return message.reply(`channel name changed to ${newname}`)
        }

        if(args[0] === "text"){
            args.shift();
            let newname = args.join(" ");
            if(!newname) return message.reply("you need to specify a new name!")
            message.channel.setName(`${newname}`)
            return message.reply(`channel name changed to ${newname}`)
        }

        if(!args[0]) {
            return message.reply("you need to specify a channel type (vc/text)!")
        }

        message.reply("missing arguments! ```ex: f setname vc/text```")
    }
}