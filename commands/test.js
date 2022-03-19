const discord = require('discord.js')
const schema = require('../schema/afkschema')

module.exports = {
    name: 'test',
    run: async(client, message, args, ms) => {
        if(!message.author.id === 732043268946133133) {
            return message.reply ("you shall not have access to this command!");
        }
        
        const reason = args.slice(1).join(" ") || "no reason!";
        const remind = ms(`${args[0]}`);
        const currenttime = Date.now();

        if (!args[0]) {
            return message.reply("add an amount of time!")
        }
        
        else if (!reason) {
            message.reply(`i will remind you in ${args[0]}!`)
        };

        let data;
            try {
                data = await schema.create({
                    userId: message.author.id,
                    guildId: message.guild.id,
                    remindreason: `${reason}`,
                    currenttime: `${currenttime}`,
                    remindtime: `${currenttime + remind}`
                })
            } catch(e) {
                console.log(e)
            }
            
        message.reply(`i will remind you in ${args[0]}: ${reason}!`)
    }
}
