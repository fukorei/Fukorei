const schema = require('../schema/afkschema');

module.exports = {
    name: 'afk',
    execute(client, message, args) {
        const reason = args.join(" ") || 'no reason!';
        let data
        try{
            data = schema.findOne({
                userId: message.author.id,
                guildId: message.guild.id,
            })

            if(!data){
                data = schema.create({
                    userId: message.author.id,
                    guildId: message.guild.id,
                })
            }
        } catch(error){
            console.log(error)
        }

        message.reply(`i set your afk:${reason}`)
        data.afk = true
        data.afkreason = reason
        data.save()
    }
}