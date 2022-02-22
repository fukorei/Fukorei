const discord = require('discord.js')
const schema = require('../schema/afkschema')

module.exports = {
    name: 'afk',
    run: async (client, message, args, url, db) => {
        const reason = args.join(" ") || 'no reason!';
        const afknick = '[AFK] ';
        const nickbfr = message.member.displayName;

            let data;
            try {
                data = await schema.findOne({
                    userId: message.author.id,
                    guildId: message.guild.id,
                })
                if(!data) {
                    data = await schema.create({
                        userId: message.author.id,
                        guildId: message.guild.id,
                    })
                }
            } catch(e) {
                console.log(e)
            }
        
            message.channel.send(` <@${message.author.id}> i set your afk: ${reason}`)
            data.afk = true
            data.afkreason = reason
            await data.save()

            if(message.author.id === message.guild.ownerId) return;
            message.member.setNickname(`${afknick}` + `${nickbfr}`)
        
        }
        
}
