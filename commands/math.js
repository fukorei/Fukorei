const symbols = ["+", "-", "*", "/"];

module.exports = {
    name: 'maths',
    run: async(client, message, args) => {
       
        let total = 0;
        let cSymbol = "+"
        console.log(args)

        if (!args[0]) {
            return message.reply('missing arguments! (remember to seperate your numbers and symbols! ex: 1 + 1)')};


        if (Number.isNaN(+args[0])) {
            return message.reply('wrong arguments! (must be a number)')};


        args.forEach(index => {
            if (!isNaN(index)) {
                switch (cSymbol) {
                    case "x": {
                        total *= Number(index)
                        break;
                    }

                    case "+": {
                        console.log(Number(index));
                        total += Number(index)
                        break;
                    }

                    case "-": {
                        total -= Number(index)
                        break;
                    }

                    case "/": {
                        total /= Number(index)
                        break;
                    }
                    
                    case ":": {
                        total /= Number(index)
                        break;
                    }

                    case "*": {
                        total *= Number(index)
                        break;
                    }
                }
            }
            if (symbols.includes(index)) cSymbol = index;
        })
        return message.reply(`${total}`)
    }
}
