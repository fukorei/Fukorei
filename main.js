const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix ='segs ';
const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')
require("dotenv/config");



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
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(!message.content.toLowerCase().startsWith(prefix)){
        client.commands.get('cmdswithoutprfx').execute(client, message, args);
    } else {

    var blarr=["606409312411058176"];
    if (blarr.includes(message.author.id)) return;

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    else if(command === 'user'){
        client.commands.get('user').execute(client, message, args);
    }

    else if(command === 'lock'){
        client.commands.get('lock').execute(client, message, args);
    }

    else if(command === 'unlock'){
        client.commands.get('unlock').execute(client, message, args);
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

    else if(command === 'spamqa'){
        client.commands.get('spamqa').execute(client, message, args, prefix);
    }
        
    else if(command === 'sadge'){
        message.channel.send('<:pepe_sadge:929713686615052298>')
    }

    else if(command === "help"){
        client.commands.get('help').execute(client, message, args)
    }

    else if(command === 'changelogs'){
        client.commands.get('changelogs').execute(client, message, args);
    }

    else if(command === 'le'){
        client.commands.get('fischl').execute(client, message, args);
    }

    else if(command === 'github'){
        client.commands.get('github').execute(client, message, args);
    }

    else if(command === 'đàm'){
        client.commands.get('dam').execute(client,message,args);
    }

    else if(command === 'say'){
        client.commands.get('say').execute(client, message, args);
    }

    else if(command === 'spamle'){
        client.commands.get('spamle').execute(client, message, args, prefix);
    }

    else if(command === 'maths'){
        client.commands.get('maths').execute(client, message, args, prefix);
    }
}
});

client.login(process.env.DISCORD_BOT_TOKEN)