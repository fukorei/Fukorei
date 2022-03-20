module.exports = {
    name: 'announce',
    description: 'announce in the announcements channel',
    run: async (client, message, args) => {
        const announcechannel = client.channels.cache.find(channel => channel.name === "announcements")
        if (!message.member.permissionsIn(message.channel).has("ADMINISTRATOR")) return;

        if(!args.length) return message.channel.send("what do you want me to announce <:mikewhat:806372341629976586>");
        announcechannel.send(`@everyone ` + args.join(" "));
        message.delete()
    }
}