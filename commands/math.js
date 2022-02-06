

module.exports = {
    name: 'maths',
    description: 'basic maths',
    execute(client, message, args) {
        if(Number.isNaN(+args[0]) || Number.isNaN(+args[2])){
            return message.channel.send('numbers and signs must be seperated!')
        } else{
            const maths
            switch (maths){
                case plus: 
                if(!args[1] === "+") return;
                if(args[1] === "+"){
                    const result = +args[0] + +args[2]
                    console.log(result)
                    message.channel.send(result)
                }
            }
        }
    }
}