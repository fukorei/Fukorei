

module.exports = {
    name: 'maths',
    description: 'basic maths',
    execute(client, message, args) {
        const symbols = ["+", "-", "*", "/"];
        // args = ["30" , "+", "20","-", "15", "*"]
        
        let total = 0;
        let cSymbol = "+"
        args.foreach(index => {
          if(!isNan(index)){
            switch(cSymbol){
              // The symbol is + so i have to add
              case "+":{
                total += Number(index)
                break;
              }
            }
          }
          // If its not a number then validate the symbol. and assign it.
          if(symbols.includes(index)) cSymbol = index;
        })

        return message.channel.send(total)
    }
}