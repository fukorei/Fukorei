module.exports = {
    name: 'pick',
    run: async (message, args) => {
    if(!args[0]) return message.reply ("you must provide arguments!");

    console.log(args);
    let pickargs = message.content;
    for (let i = 0; i < args.length; i++) {
        if(pickargs[i]==="|"){
            pickargs.split
        }
    }
    console.log(pickargs);
    const pick = args[Math.floor(Math.random() * args.length)];
    message.reply(`i choose `+`${pick}`);
    }
}