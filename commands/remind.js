module.exports = {
    name: 'remind',
    description: 'remind an user sth',
    execute(client, message, args) {
        //["time", "reason", "loop or not"]
        if(!args[0]){
            return message.channel.send('you must give an amount of time!')
        } 

        if(args[args.length - 1] === 'loop'){
            setInterval(function(){
                
            })
        }
    }
}