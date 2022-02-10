module.exports = {
    name: "ping",
    description: "this is a ping command",
    execute(message) {
        message.reply(`pong, ${Date.now() - message.createdTimestamp}ms`);
    }
}