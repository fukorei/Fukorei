require("dotenv/config");

const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const afkreason = new Map();
const PREFIX = 'segs ';

client.commands = new Collection();
client.emitters = { client };

const commandFiles = fs.readdirSync('./commands/')
    .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const eventFiles = fs.readFileSync('./events/')
    .filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    let emitter = client.emitters[event.emitter ? event.emitter : "client"];
    emitter[event.once ? "once" : "on"](client, event.event, event.execute.bind(event));
}


client.on('ready', () => {
    console.log('Online!')
    client.user.setActivity(`your mom`);
});

client.on("messageCreate", message => {
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.author.bot) return;

    var blarr = ["606409312411058176"];
    if (blarr.includes(message.author.id)) return;

    if (!message.content.toLowerCase().startsWith(PREFIX)) {
        client.commands.get('cmdswithoutprfx').execute(client, message, args, afkreason);
    } else {

        if (command === 'ping') {
            client.commands.get('ping').execute(message, args);
        }

        else if (command === 'user') {
            client.commands.get('user').execute(client, message, args);
        }

        else if (command === 'lock') {
            client.commands.get('lock').execute(client, message, args);
        }

        else if (command === 'unlock') {
            client.commands.get('unlock').execute(client, message, args);
        }

        else if (command === 'prefix') {
            message.channel.send(`"${PREFIX}" is my current prefix`);
        }

        else if (command === 'hasagi') {
            message.channel.send(`<:mastery7:676440941325713467>`);
        }

        else if (command === 'horny') {
            message.channel.send('UUUUUUUUWWWWWWWWWWOOOOOOOOOOOOOOOOOOGAAAAAJHGASJDHGASJHGDSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEGGGGGGGGGGGGGGGGGGGGGGGSSSSSSSSSSSSSSSSSSS');
        }

        else if (command === 'spamqa') {
            client.commands.get('spamqa').execute(client, message, args, PREFIX);
        }

        else if (command === 'sadge') {
            message.channel.send('<:pepe_sadge:929713686615052298>')
        }

        else if (command === "help") {
            client.commands.get('help').execute(client, message, args)
        }

        else if (command === 'changelogs') {
            client.commands.get('changelogs').execute(client, message, args);
        }

        else if (command === 'le') {
            client.commands.get('fischl').execute(client, message, args);
        }

        else if (command === 'github') {
            client.commands.get('github').execute(client, message, args);
        }

        else if (command === 'đàm') {
            client.commands.get('dam').execute(client, message, args);
        }

        else if (command === 'say') {
            client.commands.get('say').execute(client, message, args);
        }

        else if (command === 'spamle') {
            client.commands.get('spamle').execute(client, message, args, PREFIX);
        }

        else if (command === 'maths') {
            client.commands.get('maths').execute(client, message, args, PREFIX);
        }

        else if (command === 'afk') {
            client.commands.get('afk').execute(client, message, args, afkreason);
        }

        else if (command === 'remind') {
            client.commands.get('remind').execute(client, message, args);
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN)