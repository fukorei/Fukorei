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
        // if(message.guild.id !== "606112569622659072") return;

        //linh le im mom
        // if (message.channel.id === "921394718376611850"){
        //     const anghiu = ["571911807749324810"];
        //      if (anghiu.includes(message.author.id)) {
        //        message.channel.send('linh lê im mồm')
        // };
        // }
         

        if (message.content.toLowerCase() === 'nerd'){
            message.channel.send('https://cdn.discordapp.com/attachments/1301914339262988392/1358662265997492334/20250301_230844.jpg')
        }

        const ha = ["599952731351810048"];
        if (ha.includes(message.author.id)) {
            message.channel.send('<:sussssssssssss:1100427208348147853>')
        };

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

        else if(message.content.toLowerCase() === "trong trường hợp đá"){
            message.channel.send('Trong trường hợp Group này bị điều tra bởi các cơ quan chức năng trực thuộc bộ công an (hoặc các tổ chức chính trị tương tự phục vụ cho nhà nước CHXHCNVN), tôi khẳng định mình không bán hay tàng trữ đá cho những cá nhân khác trong nhóm này bú. Có lẽ, số đá còn lại không được giấu ở đâu mà được cung cấp bởi một bên thứ ba.')
        }

        var badumtss = ["ba dum tss", "badum tss", "badumtss"]
        if(badumtss.includes(message.content.toLowerCase())){
            message.channel.send('https://cdn.discordapp.com/attachments/902548040399880243/902548399373553704/Ba_Dum_Tss_Sound_Effect.mp4')
        }

        var amogus = ["sus", "ඞ"]
        if(message.content.toLowerCase() === "amogus"){
        const randomsus = amogus[Math.floor(Math.random() * amogus.length)];
        message.channel.send(randomsus)
        }

        else if (message.content.toLowerCase() === "sadge"){
            message.channel.send('<:pepe_sadge:929713686615052298> ')
        }

        else if(message.content.toLowerCase() === "q1 rìa"){
            message.channel.send('W NỐI Q2E ÁC CHƯA KÌA Q3 CHỈ THẲNG ĐẦU ĐÁNH TAY NỘI TAI THIÊU ĐỐT SÔ LÔ CIUUUUUUUUUUU <:LETSFUCKINGGO:1016321956968136826><:LETSFUCKINGGO:1016321956968136826><:LETSFUCKINGGO:1016321956968136826>\nhttps://cdn.discordapp.com/attachments/606112569622659076/1047801793855361044/FB_IMG_1667714523403.jpg')
        }

        var phanung = ["phan ung cua t", "phan ung cua tao", "phan ung"]
        var angseng = ["https://cdn.discordapp.com/attachments/606112569622659076/1070369166449721344/323712471_1615327615591833_799687899885422790_n.mp4", ]
        if(phanung.includes(message.content.toLowerCase())){
            const randomphanung = angseng[Math.floor(Math.random() * angseng.length)];
            message.channel.send(randomphanung)
        }

        else if(message.content.toLowerCase() === "where boost" ){
            message.channel.send(`<@571911807749324810>`);
            message.channel.send(`Where boost`);
            message.channel.send(`<:mikewhat:806372341629976586>`);
        }

        var si = ["skill issue", "skill issie"]
        if(si.includes(message.content.toLowerCase())){
            message.channel.send("https://cdn.discordapp.com/attachments/606112569622659076/1074185233882157197/qa3rwsedrft.mp4")
            }

        var huat = ["okay but", "who asked", "hu át", "hu at", "ai hỏi", "yea but", "ok but"]
        if(huat.includes(message.content.toLowerCase())){
            message.channel.send("https://cdn.discordapp.com/attachments/606112569622659076/1098287065654894682/caption.png")
        }

        var women = ["wâu mừn", "wau mừn", "wau mun"]
        if(women.includes(message.content.toLowerCase())){
            message.channel.send("https://cdn.discordapp.com/attachments/606112569622659076/1102031700139184128/IMG_1646.mov")
        }
        
        var didyouknow = ["did you know", "did you know that", "dyk"]
        if(didyouknow.includes(message.content.toLowerCase())){
            message.channel.send("Did you know that in terms of sex, Kokomi is probably the most flexible unit you could go for? Not only is she Hydro, which would allow her to do all sorts of things with her saliva and your semen, but she is also a healer, which makes all sort of hardcore BDSM possible, because she can always heal herself. You can be as rough with her as you would like, and she can quickly recover both herself and you from fatigue so you can keep going for as long as possible. Not only that, but she is short and petite, so you can pick her up and do whatever you want with her. Kokomi is literally built for human dick. Also, for fun, you can have sex with her on top of water. Ungodly defense stat with high HP pool and healing means she can take cock all day, all shapes and sizes and still come back for more.||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| <@840145281806368798>")
        }

        var xl = ["xl", "xl agane", "xl agane oppa", "biết ông ai không"]
        if(xl.includes(message.content.toLowerCase())){
            message.channel.send('I cannot take it anymore. I am sick of Xiangling. I try to play Diluc. My Xiangling deals more damage. I try to play Yoimiya. My Xiangling deals more damage. I try to play Cyno. My Xiangling deals more damage. I do not even try to play Dehya. I want to play Klee. Her best team has Xiangling. I want to play Raiden, Childe - they both want Xiangling. She grabs me by the throat. I fish for her. I cook for her. I give her the Catch. She is not satisfied. I pull Engulfing Lightning. "I do not need this much er" She tells me. "Give me more field time." She grabs Bennett and forces him to throw himself off enemies. "You just need to funnel me more. I can deal more damage with Homa." I cannot pull for Homa, I do not have enough primogems. She grabs my credit card. It declines. "Guess this is the end." She grabs Gouba. She says "Gouba, get them." There is no hint of sadness in her eyes. Nothing but pure, no icd pyro application. What a cruel world.')
        }
    }
}
