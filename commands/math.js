

module.exports = {
    name: 'maths',
    description: 'basic maths',
    execute(client, message, args) {
        const symbols = ["+", "-", "*", "/"];
        
        let total = 0;
        let cSymbol = "+"
        args.forEach(index => {
          if(!isNan(index)){
            switch(cSymbol){
              case "+":{
                total += Number(index)
                break;
              }
            }
          }
          if(symbols.includes(index)) cSymbol = index;
        })

        return message.channel.send(total)
    }
}