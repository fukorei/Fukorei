
module.exports = {
    name: 'test',
    run: async(client, message, args, ms) => {
        let MessageCache = new Map();
        client.MessageDeleteCache = MessageCache;
        client.on("messageDelete",(msg) => MessageDeleteCache.set(message.channel.id,{msg,deleteUser: deleteUserFromEvent}))
        return message.channel.send({
            content: `${client.MessageDeleteCache.get(message.channel.id)}`
        })
    }
}
