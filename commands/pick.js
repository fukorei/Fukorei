module.exports = {
    name: 'pick',
    run: async (message, args) => {
    message.reply(`${Math.floor(Math.random() * args.length)}`);
    }
}