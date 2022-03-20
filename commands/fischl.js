const fischl = [
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816565904814140/HYkMoMAUWkVcZxZwrSep2JKGhTEETcO2rLoKhFd5ysU.jpg",
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816566286491679/mika-alcantara-fischl1.png",
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816567347642408/anime-girls-genshin-impact-fischl-genshin-impact-hd-wallpaper-preview.jpg",
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816567599316992/lnb7vsdvps781.jpg",
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938816567792267336/wHlI4zfn24khVnIURpmkvHfbRACOJOvR4UbA_xmTBwc.jpg",
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938817306388201532/illust_85262679_20220203_221436.jpg",
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938817307189321738/illust_90080364_20220203_221524.jpg",
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938817307847831582/illust_84945467_20220203_221548.png",
    "<@840145281806368798> https://cdn.discordapp.com/attachments/936126325071163412/938817354777915432/illust_85010765_20220203_221541.jpg"
]

module.exports = {
    name: "fischl",
    description: "rip le",
    run: async(_, message) => {
        if(message.guild.id !== '606112569622659072'){
            return message.reply ("you shall not have access to enter the secret commands of me!");
        }
        const randomfischl = fischl[Math.floor(Math.random() * fischl.length)];
        message.channel.send(randomfischl)
    }
}