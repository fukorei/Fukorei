require("dotenv/config");

const fs = require('fs');
const ms = require('ms');
const moment = require('moment');
const mongoose = require('mongoose');
const afks = require('./schema/afkschema');
const { Database } = require('quickmongo');
const { Client, Intents, Collection, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const client = new Client({ intents: new Intents(32767) });

const url = process.env.mongooseConnectionString;
const db = new Database(url);

// command collections
client.commands = new Collection();
client.emitters = { client };
client.snipes = new Map();

// load commands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", async () => {
    console.log('✅ Bot is online!');
    client.user.setActivity(`your mom`);

    if (url) {
        try {
            await mongoose.connect(url, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                keepAlive: true,
            });
            console.log('✅ Connected to database.');
        } catch (err) {
            console.error('❌ Database connection error:', err);
        }
    }

    // Deploy slash commands tự động khi ready
    try {
        const commands = [];
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            if (command.data) {
                commands.push(command.data.toJSON());
            }
        }

        const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

        if (process.env.GUILD_ID) {
            await rest.put(
                `/applications/${process.env.CLIENT_ID}/guilds/${process.env.GUILD_ID}/commands`,
                { body: commands }
            );
            
            console.log('✅ Slash commands deployed to GUILD!');
        } else {
            await rest.put(
                `/applications/${process.env.CLIENT_ID}/commands`,
                { body: commands }
            );            
            console.log('✅ Slash commands deployed GLOBAL (mọi server)!');
            console.log('⚠️ Lưu ý: Deploy global có thể mất 1 tiếng để hiện trên Discord.');
        }

    } catch (error) {
        console.error('❌ Error deploying slash commands:', error);
    }
});

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild) return;

    const prefixes = ["f ", "fuko "];
    const prefix = prefixes.find(p => message.content.toLowerCase().startsWith(p));
    if (!prefix) {
        const args = message.content.trim().split(/ +/g);
        const cmd = client.commands.get('cmdswithoutprfx');
        if (cmd) cmd.run(client, message, args, ms, afks);
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (!command) return;

    try {
        await command.run(client, message, args, prefix, ms, commandName, moment, url, db);
    } catch (error) {
        console.error(error);
        message.reply('Có lỗi khi thực hiện lệnh.');
    }
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
        await command.run(client, interaction, [], null, db);
    } catch (error) {
        console.error(error);
        interaction.reply({ content: 'Có lỗi xảy ra khi xử lý slash command.', ephemeral: true });
    }
});

client.on("messageDelete", (message) => {
    client.snipes.set(message.channel.id, {
        message: message.content,
        author: message.author,
        created: message.createdAt,
        image: message.attachments.first() ? message.attachments.first().proxyURL : null,
    });
});

client.login(process.env.DISCORD_BOT_TOKEN);