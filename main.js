const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix ='segs ';
const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')
require("dotenv/config");



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Online!')
    client.user.setActivity(`your mom`);
});

client.on("messageCreate",message=>{
    var blarr=["606409312411058176"];
    if (blarr.includes(message.author.id)) return;

    var ghevs = ["ge v s", "ghe vay sao", "ghe v s", "ghe v sao"]
    if(ghevs.includes(message.content.toLowerCase())){
        message.channel.send('🪑👗⭐🤨')
    }

    else if(message.content.toLowerCase() === 'ge v dok'){
        message.channel.send("🪑👗🔴'")
    }

    else if(message.content.toLowerCase() === 'qua ghe gom'){
        message.channel.send('va day la pho lon ti lo!')
    }

    else if(message.content.toLowerCase() === 'folontilo'){
        message.channel.send
        ("Quá ghê gớm....🌚😳\nVà đây là Folontilô!😱😱\nFolontilô ui... 🥶🥶👿😳một tình huống múa phải nói là cực 👿gắt!!\n*music🤯\nThẹn thùng nhìn em quay gót đi mãi😞😞💔\nAnh đứng chết lặng trong mưa😭😭\nDù rằng bên😊😊 em đã có aiS\nNhưng nơi đây anh 🤗🤗🥱vẫn còn chờ...")
    }

    var urmom = ["ur mom", "your mom"]
    if(urmom.includes(message.content.toLowerCase())){
        message.channel.send('<:yourmom:938793655781695498>')
    } 

    if(message.content.toLowerCase() === 'kappa'){
        message.channel.send('<:kappa:938793655991418921> ')
    }

    else if(message.content.toLowerCase() === 'emotional damage'){
        message.channel.send("https://cdn.discordapp.com/attachments/939008225766948874/939008413382357122/Emotional_Damage.mp4")
    }

    else if(message.content.toLowerCase() === 'i will send you to jesus'){
        message.channel.send('https://cdn.discordapp.com/attachments/939008225766948874/939018214451593246/2.mp4')
    }

    else if(message.content.toLowerCase() === 'sóng bắt đầu từ gió'){
        message.channel.send('gió bắt đầu từ q\nkhi nào hasagi\nthì ta phải trăn trối\nnếu pha đó có lỗi\nphải tốc biến chạy ngay\nctrl 6 liền tay\nda xua thông thạo 7')
    }
}); 

client.on("messageCreate",message=>{
    if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    var blarr=["606409312411058176"];
    if (blarr.includes(message.author.id)) return;

    else if(command === 'ping'){
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

    else if(command === 'qa'){
        message.channel.send('<@602146178636709888>')
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
        message.channel.send('here is the bot repo on github where you can see exact changes:\nhttps://github.com/arizl/segs/commits/main')
    }

    else if(command === 'đàm'){
        message.channel.send('here lies an awesome sex dungeon waiting to be developed :D')
    }

    else if(command === 'say'){
        client.commands.get('say').execute(client,message,args);
    }

    else if(command === 'spamle'){
        if (message.author.bot) return;
        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")){
            message.channel.send('mày làm gì có tuổi ping <:lul:806387931606024232>')
        } else {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        console.log(args)
        args.shift()

        if(Number.isNaN(+args)){
            message.channel.send('that is not a valid amount of times to ping!')
        } else {
            for(let i = 0; i < +args; i++){
                message.channel.send('<@840145281806368798>')
            }
        }
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN)