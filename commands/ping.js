const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: "ping",
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('pong'),

    run: async (client, messageOrInteraction, args) => {
        const isInteraction = messageOrInteraction.isCommand?.();
        const latency = Date.now() - messageOrInteraction.createdTimestamp;

        if (isInteraction) {
            await messageOrInteraction.reply(`pong! ${latency}ms.`);
        } else {
            await messageOrInteraction.reply(`pong! ${latency}ms.`);
        }
    }
};