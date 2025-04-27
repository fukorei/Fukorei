require('dotenv/config');
const { REST, Routes } = require('discord.js');
const fs = require('fs');

// Load tất cả commands từ folder ./commands/
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    if (command.data) {
        commands.push(command.data.toJSON());
    }
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

// Deploy lệnh vào server
(async () => {
    try {
        console.log('🔄 Deploying slash commands...');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );

        console.log('✅ Slash commands deployed thành công!');
    } catch (error) {
        console.error('❌ Error deploying commands:', error);
    }
})();