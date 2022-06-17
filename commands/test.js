const discord = require('discord.js')
const schema = require('../schema/afkschema')
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')

module.exports = {
    name: 'test',
    run: async(client, message, args, ms) => {
        if(!args[0]) return message.reply ("you must provide arguments!");
        console.log(args);
        
        let pickargs = message.content.slice(6)
        let newpickargs = pickargs.includes("|") ? pickargs.split("|") : pickargs.includes(",") ? pickargs.split(",") : pickargs.split(/ +/g);
        
        const pick = newpickargs[Math.floor(Math.random() * newpickargs.length)];
        console.log("Chosen: ",pick);
        console.log("PickArgsSplit: ",newpickargs);
        return message.reply({content: `i choose ${pick}`})
}
}
