module.exports = {
    name: 'request',
    run: async(client, message, args) => {
        let author = message.author.username;
        let authorid = message.author.id;
        let content = args.join(" ");
        client.users.fetch('732043268946133133', false).then((user) => {
            user.send(`user ${author} with id: ${authorid} requested:\n${content}`);
        });
    }
}