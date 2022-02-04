const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix ='segs ';
const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { pagination } = require('reconlx')



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
}); 

client.on("messageCreate",message=>{
    if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    else if(command === 'user'){
        const Embed = new Discord.MessageEmbed()
        .setColor("#ddbec3")
        // .setAvatar(message.author.displayAvatarURL())
        .addField("Username:", `${message.author.username}#${message.author.discriminator}`)
        .addField("User ID:", `${message.author.id}`)
        .addField("Created At:", `${message.author.createdAt}`)
        message.channel.send({ embeds: [Embed] });
    }

    else if(command === 'lock'){
        const role = message.guild.roles.cache.find(r => r.name === '@everyone')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) channel = message.channel;

        if(!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")) {
            return message.channel.send('m tuổi gì mà đòi lock?');
        }
        else if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === false){
            return message.channel.send(`${channel} is already locked!`);
        }
        
        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: false}).catch(() => { })
        message.channel.send(`djt me chúng mày im tất hộ bố`)
    }


    else if(command === 'unlock'){
        const role = message.guild.roles.cache.find(r => r.name === '@everyone')
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!channel) channel = message.channel;

        if (channel.permissionsFor(message.guild.id).has('SEND_MESSAGES') === true){
            return message.channel.send(`mở rồi con gà`);
        }
        
        channel.permissionOverwrites.edit(role, { SEND_MESSAGES: true}).catch(() => { })
        message.channel.send(`sủa đi mấy con gà con`)
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
        var blarr=["448296073346285595"];
        if (blarr.includes(message.author.id)){
            message.channel.send('');
        } else {
            for(let i = 1; i<=5; i++){
                message.channel.send('<@602146178636709888>')
            }
        }
    }
        

    else if(command === 'sadge'){
        message.channel.send('<:pepe_sadge:929713686615052298>')
    }

    else if(command === "help"){
        const help1 = new Discord.MessageEmbed()
        .setColor("#ddbec3")
        .setTitle("help menu idk man")
        .addField("segs horny", `AWOOOOOOOOOOOOGA SEGGGGGGGGGGS`)
        .addField("segs ping", `this literally exists to lmk that my bot isnt ded`)
        .addField("segs user", `shows user info`)
        .addField("segs spamqa", `spam ping the fuck out of that mf`)
        .addField("segs sadge", `sadge`)
        .addField("segs hasagi", `yasuo thong thao 7`)

        const help2 = new Discord.MessageEmbed()
        .setColor("#ddbec3")
        .setTitle("help menu idk man")
        .addField("segs changelogs", `get access to the changelogs channel`)
        .addField("segs le", `A very helpful command to make the bot send pictures of the amazing character "Fischl" from the game "Jenshin Impact"!`)
        .addField("ghe v s, ghe v dok, qua ghe gom, folontilo, emotional damage, kappa, ur mom, i will send you to jesus", `<:kekw:805463070527717376>`)

        const helppages = [help1, help2];

        pagination({
            embeds: helppages,
            channel: message.channel,
            author: message.author,
            time: 30000,
            // button: [{
            //     name: 'previous',
            //     style: 'DANGER'
            // }],
        })
    }

    else if(command === 'changelogs'){
        if(message.member.roles.cache.some(role => role.name === 'segs changelog')){
            message.channel.send('you already have access to the changelogs channel!')
        } else {
            let role = message.member.guild.roles.cache.find(role => role.name === "segs changelog");
            if (role) message.guild.members.cache.get(message.author.id).roles.add(role)
            message.channel.send('you now have access to changelogs channel!')
        }
    }

    else if(command === 'le'){
        const fischl = ["<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816565904814140/HYkMoMAUWkVcZxZwrSep2JKGhTEETcO2rLoKhFd5ysU.jpg", "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816566286491679/mika-alcantara-fischl1.png", "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816567347642408/anime-girls-genshin-impact-fischl-genshin-impact-hd-wallpaper-preview.jpg", "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816567599316992/lnb7vsdvps781.jpg", "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816567792267336/wHlI4zfn24khVnIURpmkvHfbRACOJOvR4UbA_xmTBwc.jpg", "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938817306388201532/illust_85262679_20220203_221436.jpg", "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938817307189321738/illust_90080364_20220203_221524.jpg", "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938817307847831582/illust_84945467_20220203_221548.png", "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938817354777915432/illust_85010765_20220203_221541.jpg"]
        const randomfischl = fischl[Math.floor(Math.random() * fischl.length)];
        message.channel.send(randomfischl)
    }

    else if(command === 'github'){
        message.channel.send('here is the bot repo on github where you can see exact changes:\nhttps://github.com/arizl/segs/commits/main')
    }

    else if(command === 'đàm'){
        message.channel.send('here lies an awesome sex dungeon waiting to be developed :D')
    }

    else if(command === 'say'){
        if (message.author.bot) return;
        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const user = message.author;
        
        if (!args[0]) {
        message.channel.send("what do you want me to say dumbass <:mikewhat:806372341629976586>")
        }

        const say = args.join(" ");
        message.channel.send(say)
        message.delete()
    }

    else if(command === 'spamle'){
        if (message.author.bot) return;
        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")) return;
        const args = message.content.slice(prefix.length).split(/ +/);;
        console.log(args)

        if(Number.isNaN(+args)){
            message.channel.send('that is not a valid amount of times to ping!')
        } else {
            for(let i = 0; i < args; i++){
                message.channel.send('<@840145281806368798>')
            }
        }
    }
});

client.login('OTM0NzkzNTE1MTY5Mzc0MjQ5.Ye1QTQ.tcj1aeQMaOecpR2Fsc5XmSLsJKw');