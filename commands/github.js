module.exports = {
    name: "github",
    description: "github commands",
    run: async(_, message, args) => {
        switch (args[0]) {
            case "commits":
                return message.reply('here are the commits, basiclly whats changed in my code\n<https://github.com/arizl/Fukorei/commits/main>')
            case "main":
                return message.reply('here is the main.js file:\n<https://github.com/arizl/Fukorei/blob/main/main.js>')
            case "commands":
                return message.reply('here are the commands .js files:\n<https://github.com/arizl/Fukorei/tree/main/commands>')
            default:
                return message.reply('the repository for fukorei: <https://github.com/arizl/Fukorei>')
        }
    }
}
