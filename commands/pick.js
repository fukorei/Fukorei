module.exports = {
    name: 'pick',
    run: async (message, args) => {
        if(!args[0]) return message.reply ("you must provide arguments!");
        
        let pickargs = message.content.slice(7)
        let newpickargs = pickargs.includes("|") ? pickargs.split("|") : pickargs.includes(",") ? pickargs.split(",") : pickargs.split(/ +/g);
        
        const pick = newpickargs[Math.floor(Math.random() * newpickargs.length)];
        return message.reply({content: `i choose ${pick}`})
    }
}