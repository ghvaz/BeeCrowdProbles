const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function calculoSalarioFinal() {
    rl.question('', (input) => {
        let nome = input
       rl.question('',(input)=>{
           let salarioFX = Number(input)
            rl.question('',(input)=>{
                let vendas = Number(input)
                let total = salarioFX + (vendas*0.15)
                console.log("TOTAL = R$ "+total.toFixed(2));
            }) 
       })
    });
}

calculoSalarioFinal()
calculoSalarioFinal()
calculoSalarioFinal()