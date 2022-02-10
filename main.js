const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix ='segs ';
const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx');
const ms = require('ms');
const afkreason = new Map();
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

    var blarr=["606409312411058176"];
    if (blarr.includes(message.author.id)) return;
    
    if(!message.content.toLowerCase().startsWith(prefix)){
        client.commands.get('cmdswithoutprfx').execute(client, message, args, afkreason);
    } else {
        client.commands.get('cmds').execute(client, message, args, prefix, ms, afkreason, command);
    }
});

client.login(process.env.DISCORD_BOT_TOKEN)