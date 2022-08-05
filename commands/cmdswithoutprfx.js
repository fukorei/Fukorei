module.exports = {
    name: 'cmdswithoutprfx',
    description: 'all the commands without prefix',
    run: async (client, message, args, ms, afks) => {
        const nickbfr = message.member.displayName;
        let data2;
        try {
            data2 = await afks.findOne({
                userId: message.author.id,
                guildId: message.guild.id,
                // nickbefore: `${message.member.displayName}`,
            })
            if (!data2) {
                data2 = await afks.create({
                    userId: message.author.id,
                    guildId: message.guild.id,
                    // nickbefore: `${message.member.displayName}`,
                })
            }
        } catch (error) {
            console.log(error)
        }

        if (data2.afk === true) {
            message.reply(`oh, you're back, removed ur afk! you were previously afk for: ${data2.afkreason || 'no reason!'}`)
            data2.afkreason = null
            data2.afk = false
            await data2.save()

            if(message.author.id === message.guild.ownerId) return;
            message.member.setNickname(`${nickbfr.slice(6)}`)
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
                message.reply(`${message.mentions.members.first().displayName} is currently afk: ${data3.afkreason || 'no reason!'} `)
            }
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

        var taoatce = ["tao át", "tao at", "tao ce", "t at", "t át", "t ce"]
        if(taoatce.includes(message.content.toLowerCase())){
            message.channel.send('https://cdn.discordapp.com/attachments/606112569622659076/952923148326694973/taoat.mp4')
        }

        var luonggiac = ["djt me luong giac", "dmlg", "dm luong giac","đjt mẹ lượng giác", "đm lượng giác"]
        if(luonggiac.includes(message.content.toLowerCase())){
            client.commands.get('luonggiac').run(message, args);
        }




        //airlines custom commands from here onwards:
        if(message.guild.id !== "606112569622659072") return;

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
            args.shift()
            client.commands.get('maths').run(client, message, args);
        }

        var sautettdi = ["sau tết t đi"]
        if (sautettdi.includes(message.content.toLowerCase())) {
            message.channel.send('https://cdn.discordapp.com/attachments/606112569622659076/941299164447383582/unknown.png')
        }

        var cappa = ["cappa", "cappalul"]
        if (cappa.includes(message.content.toLowerCase())) {
            message.channel.send('<:cappalul:944215825601146930>')
        }

        var dmthgle = ["stop doing meths", "djt me thg le"]
        if(dmthgle.includes(message.content.toLowerCase())){
            message.channel.send('https://cdn.discordapp.com/attachments/606112569622659076/945941741347938314/unknown.png')
        }

        var unikey = ["dmm unikey", "unikey", "unikey đâu thằng lồn", "unikey đâu thg loz"]
        if(unikey.includes(message.content.toLowerCase())){
            for (let i = 0; i<5; i++){
            message.channel.send("https://www.unikey.org/")
            }
        }
        
        else if(message.content.toLowerCase() === "trong trường hợp"){
            message.channel.send('Trong trường hợp page này bị điều tra bởi các cơ quan trực thuộc bộ công an (hoặc các tổ chức chính trị tương tự phục vụ cho nhà nước CHXHCNVN), tôi khẳng định mình không liên quan tới page hoặc những cá nhân khác trong page này. Tôi không rõ tại sao mình lại có mặt ở đây vào thời điểm này, có lẽ tài khoản của tôi đã được thêm bởi một bên thứ ba.')
        }

        else if(message.content.toLowerCase() === "trong trường hợp naku"){
            message.channel.send('Trong trường hợp Group này bị điều tra bởi các cơ quan chức năng trực thuộc bộ công an (hoặc các tổ chức chính trị tương tự phục vụ cho nhà nước CHXHCNVN), tôi khẳng định mình không bán hay trồng cỏ Naku cho những cá nhân khác trong nhóm này bú. Có lẽ, cỏ Naku đã được cung cấp bởi một bên thứ ba.')
        }

        else if(message.content.toLowerCase() === "trong trường hợp + naku"){
            message.channel.send('Trong trường hợp Group này bị điều tra bởi các cơ quan chức năng trực thuộc bộ công an (hoặc các tổ chức chính trị tương tự phục vụ cho nhà nước CHXHCNVN), tôi khẳng định mình không bán hay tàng trữ đá cho những cá nhân khác trong nhóm này bú. Có lẽ, số đá còn lại không được giấu ở đâu mà được cung cấp bởi một bên thứ ba.')
        }

        var badumtss = ["ba dum tss", "badum tss", "badumtss"]
        if(badumtss.includes(message.content.toLowerCase())){
            message.channel.send('https://cdn.discordapp.com/attachments/902548040399880243/902548399373553704/Ba_Dum_Tss_Sound_Effect.mp4')
        }
    }
};
