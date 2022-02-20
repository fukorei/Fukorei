module.exports = {
    name: "ping",
    run: async (message) => {
        message.reply(`pong, ${Date.now() - message.createdTimestamp}ms`);
    }
}