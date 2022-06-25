//requiring shit and declaring consts 
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

//dis thing helps makes commands work
client.commands = new Collection();
client.emitters = { client };
client.snipes = new Map();

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
    let prefixes = ["f ", "fuko "];
    let prefix = prefixes[
      prefixes.findIndex((p) => message.content.toLowerCase().startsWith(p))
    ];
    const args = message.content.slice(prefixes.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.author.bot) return;

    const blacklistArray = ["606409312411058176"];
    if (blacklistArray.includes(message.author.id)) return;

    if (!message.content.toLowerCase().startsWith(prefix)) {
        client.commands.get('cmdswithoutprfx').run(client, message, args, ms, afks);
    } else {
        client.commands.get('cmds').run(client, message, args, prefix, ms, command, moment, url, db);
    }
});


client.on("messageDelete", function(message) {
    client.snipes.set(message.channel.id, {
        message: message.content,
        author: message.author.username,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null,
    })
})




client.login(process.env.DISCORD_BOT_TOKEN)
