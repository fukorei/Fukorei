const { afk } = require('../collection');
const client = require('../collection/index')
const moment = require('moment');

client.on("messageCreate",message => {
        if(!message.guild || message.author.bot) return;

        const mentionedmember = message.mentions.members.first();
        if(mentionedmember){
            const data = afk.get(mentionedmember.id);

            if(data){
                const [ timestamp, reason ] = data;
                const timeago = moment(timestamp).fromNow();

                message.reply(`${mentionedmember} is currently afk! (${timeago})\nreason: ${reason}`);
            }
        }

        const getdata = afk.get(message.author.id);
        if(getdata){
            afk.delete(message.author.id);
            message.reply(`${message.member} your afk has been removed!`)
        }
});