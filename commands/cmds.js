module.exports = {
    name: "cmds",
    description: "the bots commands",
    run: async (client, message, args, prefix, ms, command, moment, url, db) => {
        if(command === 'ping'){
            client.commands.get('ping').run(message, args);
        }
    
        else if(command === 'user'){
            client.commands.get('user').run(client, message, args);
        }
    
        else if(command === 'lock' || message.content.toLowerCase().startsWith("khóa kênh này hộ bố")){
            client.commands.get('lock').run(client, message, args);
        }
    
        else if(command === 'unlock'){
            client.commands.get('unlock').run(client, message, args);
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
            client.commands.get('spamqa').run(client, message, args, prefix);
        }
            
        else if(command === 'sadge'){
            message.channel.send('<:pepe_sadge:929713686615052298>')
        }
    
        else if(command === "help"){
            client.commands.get('help').run(client, message, args)
        }
    
        else if(command === 'changelogs'){
            client.commands.get('changelogs').run(client, message, args);
        }
    
        else if(command === 'le'){
            client.commands.get('fischl').run(client, message, args);
        }
    
        else if(command === 'github'){
            client.commands.get('github').run(client, message, args);
        }
    
        else if(command === 'đàm'){
            client.commands.get('dam').run(client,message,args);
        }
    
        else if(command === 'say'){
            client.commands.get('say').run(client, message, args);
        }
    
        else if(command === 'spamle'){
            client.commands.get('spamle').run(client, message, args, prefix);
        }
    
        else if(command === 'maths'){
            client.commands.get('maths').run(client, message, args);
        }
    
        else if(command === 'afk'){
            client.commands.get('afk').run(client, message, args, url, db);
        }
    
        else if(command === 'remind'){
            client.commands.get('remind').run(client, message, args, ms);
        }
        
        const svinf = ["serverinfo", "svinf"]
        if(svinf.includes(command)){
            client.commands.get('serverinf').run(client, message, args, moment);
        }

        else if(command === 'test'){
            client.commands.get('test').run(client, message, args, ms);
        }

        else if(command === 'announce'){
            client.commands.get('announce').run(client, message, args);
        }

        const lg = ["luonggiac", "lg"]
        if(lg.includes(command)){
            client.commands.get('luonggiac').run(message, args);
        }
    }
}
