module.exports = {
    name: 'pick',
    run: async (message, args) => {
    if(!args) return message.reply ("you must provide arguments!");

    message.reply(`i choose `+`${Math.floor(Math.random() * args.length)}`);
    }
}