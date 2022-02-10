require("dotenv/config");

const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const afkreason = new Map();
const prefix = 'segs ';

client.commands = new Collection();
client.emitters = { client };

const commandFiles = fs.readdirSync('./commands/')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const eventFiles = fs.readdirSync('./events/')
    .filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    let emitter = client.emitters[event.emitter ? event.emitter : "client"];
    emitter[event.once ? "once" : "on"](client, event.event, event.execute.bind(event));
}

client.on("ready", () => {
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