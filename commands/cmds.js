module.exports = {
    name: "cmds",
    description: "the bots commands",
    run: async (client, message, args, prefix, ms, command, moment, url, db) => {

        const blacklistArray = ["606409312411058176","763366076967813160"];
        if (blacklistArray.includes(message.author.id)) return;

        else if(command === 'ping'){
            client.commands.get('ping').run(message, args);
        }
    
        const user = ["userinf", "userinfo", "user"]
        if(user.includes(command)){
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
    
        else if(command === 'sex'){
            message.channel.send('UUUUUUUUWWWWWWWWWWOOOOOOOOOOOOOOOOOOGAAAAAJHGASJDHGASJHGDSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEEEEEEEEEEEGGGGGGGGGGGGGGGGGGGGGGGSSSSSSSSSSSSSSSSSSS');
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
    
        else if(command === 'spam'){
            client.commands.get('spam').run(client, message, args);
        }
    
        else if(command === 'math'){
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

        else if(command === 'setname'){
            client.commands.get('setname').run(message, args);
        }

        else if(command === 'request'){
            client.commands.get('request').run(client, message, args);
        }

        else if(command === 'pick'){
            client.commands.get('pick').run(message, args);
        }

        else if(command === 'dev'){
            client.commands.get('dev').run(client, message, args);
        }

        else if(command === 'snipe'){
            client.commands.get('snipe').run(client, message, args);
        }
    }
}
