module.exports = {
    name: 'cmdswithoutprfx',
    description: 'all the commands without prefix',
    execute(client, message, args, afkreason) {
        if(message.member.roles.cache.some(role => role.name === "AFK")){
            let role = message.member.guild.roles.cache.find(role => role.name === "AFK");
            if (role) message.guild.members.cache.get(message.author.id).roles.remove(role);
            message.reply(`oh, you're back, removed your afk!`);
            afkreason.delete(message.author.id);
        }

        // const afkmentioneduser = message.mentions.members.first().resolve();
        // console.log(afkmentioneduser);
        // if(afkmentioneduser.roles.cache.some(role => role.name === "AFK")){
        //     message.reply(`this person is currently afk: ${afkreason.get(mentioneduser.id)}`)
        // }

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

        else if(message.content.toLowerCase().startsWith("how much is")){
            args.shift()
            client.commands.get('maths').execute(client, message, args);
        }

        var sus = ["sú", "sus"]
        if(sus.includes(message.content.toLowerCase())){
            message.channel.send('ඞ')
        }

        var sautettdi = ["sau tết t đi"]
        if(sautettdi.includes(message.content.toLowerCase())){
            message.channel.send('https://cdn.discordapp.com/attachments/606112569622659076/941299164447383582/unknown.png')
        }
        
        else if(message.content.toLowerCase() === "con gái ơi"){
            message.reply("dạ);
        }
    }
}
