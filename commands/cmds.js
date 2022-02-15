module.exports = {
    name: "cmds",
    description: "the bots commands",
    execute(client, message, args, prefix, ms, afkreason, command){
        if(command === 'ping'){
            client.commands.get('ping').execute(message, args);
        }
    
        else if(command === 'user'){
            client.commands.get('user').execute(client, message, args);
        }
    
        else if(command === 'lock'){
            client.commands.get('lock').execute(client, message, args);
        }
    
        else if(command === 'unlock'){
            client.commands.get('unlock').execute(client, message, args);
        }
    
        else if(command === 'prefix'){
            message.channel.send(`"${prefix}" is my current prefix`);
        }
    
        else if(command === 'hasagi'){
            message.channel.send(`<:mastery7:676440941325713467>`);
        }
    
        else if(command === 'horny'){
            message.channel.send('UUUUUUUUWWWWWWWWWWOOOOOOOOOOOOOOOOOOGAAAAAJHGASJDHGASJHGDSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEGGGGGGGGGGGGGGGGGGGGGGGSSSSSSSSSSSSSSSSSSS');
        }
    
        else if(command === 'spamqa'){
            client.commands.get('spamqa').execute(client, message, args, prefix);
        }
            
        else if(command === 'sadge'){
            message.channel.send('<:pepe_sadge:929713686615052298>')
        }
    
        else if(command === "help"){
            client.commands.get('help').execute(client, message, args)
        }
    
        else if(command === 'changelogs'){
            client.commands.get('changelogs').execute(client, message, args);
        }
    
        else if(command === 'le'){
            client.commands.get('fischl').execute(client, message, args);
        }
    
        else if(command === 'github'){
            client.commands.get('github').execute(client, message, args);
        }
    
        else if(command === 'đàm'){
            client.commands.get('dam').execute(client,message,args);
        }
    
        else if(command === 'say'){
            client.commands.get('say').execute(client, message, args);
        }
    
        else if(command === 'spamle'){
            client.commands.get('spamle').execute(client, message, args, prefix);
        }
    
        else if(command === 'maths'){
            client.commands.get('maths').execute(client, message, args);
        }
    
        else if(command === 'afk'){
            client.commands.get('afk').execute(client, message, args, afkreason);
        }
    
        else if(command === 'remind'){
            client.commands.get('remind').execute(client, message, args, ms);
        }
        
        const svinf = ["serverinfo", "svinf"]
        if(svinf.includes(command)){
            client.commands.get('serverinf').execute(client, message, args);
        }
    }
}
