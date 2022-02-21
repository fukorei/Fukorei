const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'test',
    description: 'a place to test new commands before release',
    run: async(client, message, args, moment) => {
        let botcount = 0;
        if(user.bot){
            botcount+=1;
        }
        message.channel.send(botcount)
}
}
