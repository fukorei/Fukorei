const { MessageEmbed, Message } = require('discord.js');
const { pagination } = require('reconlx')


module.exports = {
    name: 'luonggiac',
    run: async (message, args) => {
        const lg1 = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle("cơ bản")
        .setImage("https://media.discordapp.net/attachments/606112569622659076/963798180548476938/dmlg2..PNG?width=427&height=130")

        const lg2 = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle("cos đối - sin bù - phụ chéo - khác pi tan")
        .setImage("https://media.discordapp.net/attachments/606112569622659076/963795875744866354/dmlg1.png?width=319&height=405")

        const lg3 = new MessageEmbed()
        .setColor("#ddbec3")
        .setTitle("công thức tổng hiệu")
        .setDescription(`sin tổng = sincos+cossin\nsin hiệu = sincos-cossin\ncos tổng = coscos-sinsin\ncos hiệu = coscos+sinsin\ntan tổng = tổng tan/1 - tích tan\ntan hiệu = hiệu tan/1 + tích tan`)
    
        const send = [lg1, lg2, lg3];
        
    if(!args[0]){
        return pagination({
            embeds: send,
            channel: message.channel,
            author: message.author,
            time: 30000,
        });
    } 

    if(args[0] === '1'){
        return message.reply({ embeds: [lg1] });
    }

    if(args[0] === '2'){
        return message.reply({ embeds: [lg2] });
    }

    if(args[0] === '3'){
        return message.reply({ embeds: [lg3] });
    }
}
}