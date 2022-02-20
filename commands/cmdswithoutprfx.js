module.exports = {
    name: 'cmdswithoutprfx',
    description: 'all the commands without prefix',
    run: async (client, message, args, ms, afks) => {
        let data2;
        try {
            data2 = await afks.findOne({
                userId: message.author.id,
                guildId: message.guild.id
            })
            if (!data2) {
                data2 = await afks.create({
                    userId: message.author.id,
                    guildId: message.guild.id
                })
            }
        } catch (error) {
            console.log(error)
        }

        if (data2.afk === true) {
            data2.afkreason = null
            data2.afk = false
            message.channel.send("oh, you're back, removed ur afk!")
            message.member.setNickname(`${data2.nickbefore}`)
            await data2.save()
        }

        if(message.mentions.members.first()){
            let data3;
            try {
                data3 = await afks.findOne({
                    userId: message.mentions.members.first().id,
                    guildId: message.guild.id
                })
                if (!data3) {
                    data3 = await afks.create({
                        userId: message.mentions.members.first().id,
                        guildId: message.guild.id
                    })
                }
            } catch (error) {
                console.log(error)
            }

            if(data3.afk === true){
                message.reply(`${message.mentions.members.first()} is currently afk: ${data3.afkreason || 'no reason!'} `)
            }
        }

        const ghevs = ["ge v s", "ghe vay sao", "ghe v s", "ghe v sao"]
        if (ghevs.includes(message.content.toLowerCase())) {
            message.channel.send('🪑👗⭐🤨')
        }

        else if (message.content.toLowerCase() === 'ge v dok') {
            message.channel.send("🪑👗🔴'")
        }

        else if (message.content.toLowerCase() === 'qua ghe gom') {
            message.channel.send('va day la pho lon ti lo!')
        }

        else if (message.content.toLowerCase() === 'folontilo') {
            message.channel.send
                ("Quá ghê gớm....🌚😳\nVà đây là Folontilô!😱😱\nFolontilô ui... 🥶🥶👿😳một tình huống múa phải nói là cực 👿gắt!!\n*music🤯\nThẹn thùng nhìn em quay gót đi mãi😞😞💔\nAnh đứng chết lặng trong mưa😭😭\nDù rằng bên😊😊 em đã có ai\nNhưng nơi đây anh 🤗🤗🥱vẫn còn chờ...")
        }

        const urmom = ["your mom", "ur mom"]
        if (urmom.includes(message.content.toLowerCase())) {
            message.channel.send('<:yourmom:938793655781695498>')
        }

        if (message.content.toLowerCase() === 'kappa') {
            message.channel.send('<:kappa:938793655991418921> ')
        }

        else if (message.content.toLowerCase() === 'emotional damage') {
            message.channel.send("https://cdn.discordapp.com/attachments/939008225766948874/939008413382357122/Emotional_Damage.mp4")
        }

        else if (message.content.toLowerCase() === 'i will send you to jesus') {
            message.channel.send('https://cdn.discordapp.com/attachments/939008225766948874/939018214451593246/2.mp4')
        }

        else if (message.content.toLowerCase() === 'sóng bắt đầu từ gió') {
            message.channel.send('gió bắt đầu từ q\nkhi nào hasagi\nthì ta phải trăn trối\nnếu pha đó có lỗi\nphải tốc biến chạy ngay\nctrl 6 liền tay\nda xua thông thạo 7')
        }

        else if (message.content.toLowerCase().startsWith("how much is")) {
            args.shift()
            client.commands.get('maths').execute(client, message, args);
        }

        // var sus = ["sú", "sus"]
        // if(sus.includes(message.content.toLowerCase())){
        //     message.channel.send('ඞ')
        // }

        var sautettdi = ["sau tết t đi"]
        if (sautettdi.includes(message.content.toLowerCase())) {
            message.channel.send('https://cdn.discordapp.com/attachments/606112569622659076/941299164447383582/unknown.png')
        }


        let allowedid = ["732043268946133133"]
        if (message.content.toLowerCase().startsWith("khóa miệng thằng này cho bố")) {
            let mentioneduser = message.mentions.members.first();

            if (!allowedid.includes(message.author.id)) {
                return message.reply('chỉ bố tao mới được ra lệnh cho tao nhé thằng ngu!')
            }

            if (!mentioneduser) {
                return message.reply('nhớ ping thằng bố muốn mute =))')
            }

            mentioneduser.timeout(ms('5m'));
            message.reply(`con đã timeout ${mentioneduser} trong 5 phút ạ!`);
        }

        const congaioi = ["con gái", "con gái ơi", "con gái ui"]
        if (congaioi.includes(message.content.toLowerCase())) {
            if (!allowedid.includes(message.author.id)) return;
            message.reply("dạ");
        }

        else if (message.content.toLowerCase().startsWith("folon")) {
            const customfolon = message.content.slice(5).toLowerCase()
            if (message.content.length === 5) return;
            message.channel.send(`Quá ghê gớm....🌚😳\nVà đây là Folon${customfolon}!😱😱\nFolon${customfolon} ui... 🥶🥶👿😳một tình huống múa phải nói là cực 👿gắt!!\n*music🤯\nThẹn thùng nhìn em quay gót đi mãi😞😞💔\nAnh đứng chết lặng trong mưa😭😭\nDù rằng bên😊😊 em đã có ai\nNhưng nơi đây anh 🤗🤗🥱vẫn còn chờ...`)
        }

        let cappa = ["cappa", "cappalul"]
        if (cappa.includes(message.content.toLowerCase())) {
            message.channel.send('<:cappalul:944215825601146930>')
        }
    }
};
