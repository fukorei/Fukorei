
module.exports = {
    name: 'test',
    run: async(client, message, args, ms) => {
        let MessageCache = new Map();
        client.MessageDeleteCache = MessageCache;
        client.on("messageDelete",(msg) => MessageDeleteCache.set(message.channel.id,{msg,deleteUser: deleteUserFromEvent}))
        let msg = client.MessageDeleteCache.get(message.channel.id)
        return message.channel.send(msg)
    }
}
