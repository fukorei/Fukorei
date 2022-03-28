require("dotenv/config");

const fs = require('fs');
const ms = require('ms');
const moment = require('moment');
const mongoose = require('mongoose');
const afks = require('./schema/afkschema')

const { Database } = require('quickmongo');
const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: new Intents(32767) });
const url = process.env.mongooseConnectionString;
const db = new Database(url);
const prefix = ['f ', 'fuko '];

client.commands = new Collection();
client.emitters = { client };

const commandFiles = fs.readdirSync('./commands/')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", async () => {
    if (!url) return;
    await mongoose.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        keepAlive: true,
    }).then(console.log('connected to database')).catch((err) => console.error(err));
    
    console.log('online!')
    client.user.setActivity(`your mom`);
});

client.on("messageCreate", async (message) => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.author.bot) return;

    const blarr = ["606409312411058176"];
    if (blarr.includes(message.author.id)) return;

    if(!prefix.find(p=>message.content.toLowerCase().startsWith(p))) {
        client.commands.get('cmdswithoutprfx').run(client, message, args, ms, afks);
    } else {
        client.commands.get('cmds').run(client, message, args, prefix, ms, command, moment, url, db);
    }


});

client.login(process.env.DISCORD_BOT_TOKEN)
