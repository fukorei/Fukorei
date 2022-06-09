module.exports = {
    name: 'pick',
    run: async (message, args) => {
    if(!args) return message.reply ("you must provide arguments!");
    console.log(args);
    const pick = args[Math.floor(Math.random() * args.length)];
    message.reply(`i choose `+`${pick}`);
    }
}