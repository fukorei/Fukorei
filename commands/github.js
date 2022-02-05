module.exports = {
    name: "github",
    description: "github commands",
    execute(client,message,args,prefix){
        console.log(args)
        if(args[0] === 'commits'){
            message.channel.send('here are the commits, basiclly whats changed in my code\n<https://github.com/arizl/segs/commits/main>')
        } else if(args[0] === 'main'){
            message.channel.send('here is the main.js file:<https://github.com/arizl/segs/blob/main/main.js>')
        } else if(args[0] === 'commands'){
            message.channel.send('here are the commands .js files:\n<https://github.com/arizl/segs/tree/main/commands>')
        }
    }
}