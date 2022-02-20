const discord = require('discord.js')
const schema = require('../schema/afkschema')
const nickbfr = message.member.displayName;

module.exports = {
    name: 'afk',
    run: async (client, message, args, url, db) => {
        const reason = args.join(" ") || 'no reason!';
        const afknick = '[AFK] ';
            let data;
            try {
                data = await schema.findOne({
                    userId: message.author.id,
                    guildId: message.guild.id,
                    // nickbefore: `${message.member.displayName}`,
                })
                if(!data) {
                    data = await schema.create({
                        userId: message.author.id,
                        guildId: message.guild.id,
                        // nickbefore: `${message.member.displayName}`,
                    })
                }
            } catch(e) {
                console.log(e)
            }
        
            message.channel.send(`i set your afk: ${reason}`)
            data.afk = true
            data.afkreason = reason
            await data.save()

            if(message.author.id === message.guild.ownerId) return;
            message.member.setNickname(`${afknick}` + `${nickbfr}`)
        
        }
        
}
