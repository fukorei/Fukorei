module.exports = {
    name: "ping",
    execute(message) {
        message.reply(`pong, ${Date.now() - message.createdTimestamp}ms`);
    }
}