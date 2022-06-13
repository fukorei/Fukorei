const discord = require('discord.js')
const schema = require('../schema/afkschema')
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')

module.exports = {
    name: 'test',
    run: async(client, message, args, ms) => {
        if(!args[0]) return message.reply ("you must provide arguments!");
    
        console.log(args);
        let pickargs = message.content;
        args.ForEach(index => {
            if(!index === "|"){
                const pick = args[Math.floor(Math.random() * args.length)];
                return message.reply(`i choose `+`${pick}`);
            }
            
            pickargs.split("|")
            const pick = pickargs[Math.floor(Math.random() * args.length)];
            return message.reply(`i choose `+`${pick}`);
        })
        console.log(pickargs);
        }
}

