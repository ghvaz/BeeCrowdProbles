const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function valorTotalPerItem(){
    let total = 0 
    rl.question("",(input)=>{
        let dig = input.split(" ")
        total += Number((Number(dig[1])*Number(dig[2])).toFixed(2));
        rl.question("",(input)=>{
            let dig1 = input.split(" ")
            total += Number((Number(dig1[1])*Number(dig1[2])).toFixed(2));
            console.log("VALOR A PAGAR: R$ "+total.toFixed(2));
        })
    })
}
valorTotalPerItem()
