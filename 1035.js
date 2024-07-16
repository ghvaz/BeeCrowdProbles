/*
Leia 4 valores inteiros A, B, C e D.
A seguir, se B for maior do que C e
se D for maior do que A,
e a soma de C com D for maior que a soma de A e B e se C e D,ambos, 
forem positivos e se a variável A for par 
escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Exemplo de Entrada	
Exemplo de Saída

5 6 7 8
Valores nao aceitos

2 3 2 6
Valores aceitos
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    let aux = input.split(" ")
    let valores = aux.map(Number);
    if(valores[1]>valores[2] && valores[3]>valores[0] && (valores[2]+valores[3])>(valores[0]+valores[1]) && valores[2]>0 && valores[3]>0 && (valores[0]%2==0)) {
        console.log("Valores aceitos");
    }else{
        console.log("Valores nao aceitos");
    }
});