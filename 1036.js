const   readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/*
Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação 
de Bhaskara. Se não for possível calcular as raízes, 
mostre a mensagem correspondente “Impossivel calcular”, 
caso haja uma divisão por 0 ou raiz de numero negativo.

Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". 
aso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem 
correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

Exemplos de Entrada	
Exemplos de Saída

10.0 20.1 5.1
R1 = -0.29788
R2 = -1.71212

0.0 20.0 5.0
Impossivel calcular

10.3 203.0 5.0
R1 = -0.02466
R2 = -19.68408

10.0 3.0 5.0
Impossivel calcular
 */

rl.question('', (input) => {
    let aux = input.split(" ")
    let A = Number(aux[0])
    let B = Number(aux[1])
    let C = Number(aux[2])

    let delta = (B*B) - (4*A*C)

    if (delta < 0 || A == 0) {
        console.log("Impossivel calcular")
    } else {
        let raiz1 = ((-B) + Math.sqrt(delta))/(2*A)
        let raiz2 = ((-B) - Math.sqrt(delta))/(2*A)
        console.log("R1 = "+raiz1.toFixed(5))
        console.log("R2 = "+raiz2.toFixed(5))
    }   
});