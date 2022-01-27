const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
require('discord-reply');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix ='segs ';
const fs = require('fs');
const { MessageEmbed } = require('discord.js');



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Online!')
    client.user.setActivity(`your mom`);
});

client.on("messageCreate",message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    else if(command === 'user'){
        const Embed = new Discord.MessageEmbed()
        .setColor("#ddbec3")
        // .setAvatar(message.author.displayAvatarURL())
        .addField("Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("User ID:", `${message.author.id}`)
        .addField("Created At:", `${message.author.createdAt}`)
        message.channel.send({ embeds: [Embed] });
    }

    else if(command === 'lock'){
        const role = message.guild.roles.cache.find(r => r.name === '@everyone')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) channel = message.channel;

        if(!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")) {
            return message.channel.send('m tuổi gì mà đòi lock?');
        }

        else if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false){
            return message.channel.send(`${channel} is already locked!`);
        }
        
        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: false}).catch(() => { })
        message.channel.send(`djt me chúng mày im tất hộ bố`)
    }


    else if(command === 'unlock'){
        const role = message.guild.roles.cache.find(r => r.name === '@everyone')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) channel = message.channel;

        if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true){
            return message.channel.send(`mở rồi con gà`);
        }
        
        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: true}).catch(() => { })
        message.channel.send(`sủa đi mấy con gà con`)
    }

    else if(command === 'prefix'){
        message.channel.send(`"${prefix}" is my current prefix`);
    }

    else if(command === 'hasagi'){
        message.channel.send(`<:mastery7:676440941325713467>`);
    }

    else if(command === 'horny'){
        message.channel.send('UUUUUUUUWWWWWWWWWWOOOOOOOOOOOOOOOOOOGAAAAAJHGASJDHGASJHGDSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEGGGGGGGGGGGGGGGGGGGGGGGSSSSSSSSSSSSSSSSSSS');
    }

    else if(command === 'qa'){
        message.channel.send('<@602146178636709888>')
    }

    else if(command === 'spamqa'){
        var blarr=["448296073346285595"];
        if (blarr.includes(message.author.id)){
            message.channel.send('');
        } else {
            for(let i = 1; i<=5; i++){
                message.channel.send('<@602146178636709888>')
            }
        }
    }
        

    else if(command === 'sadge'){
        message.channel.send('<:pepe_sadge:929713686615052298>')
    }

    else if(command === "help"){
        const Embed = new Discord.MessageEmbed()
        .setColor("#ddbec3")
        .addField("segs horny", `AWOOOOOOOOOOOOGA SEGGGGGGGGGGS`)
        .addField("segs ping", `this literally exists to lmk that my bot isnt ded`)
        .addField("segs user", `shows user info`)
        .addField("segs spamqa", `spam ping the fuck out of that mf`)
        .addField("segs sadge", `sadge`)
        .addField("segs hasagi", `yasuo thong thao 7`)
        message.channel.send({ embeds: [Embed] });
    }

    else if(command === 'changelogs'){
        const user = message.author.id
        let changelogschannel = "936126466104623215"
        if(!message.member.permissionsIn(changelogschannel).has('VIEW_CHANNEL')){
            changelogschannel.permissionOverwrites.edit(user, { VIEW_CHANNEL: true})
        }
    }
});

client.login('OTM0NzkzNTE1MTY5Mzc0MjQ5.Ye1QTQ.tcj1aeQMaOecpR2Fsc5XmSLsJKw');