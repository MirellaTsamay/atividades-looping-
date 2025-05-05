const numero = parseInt(prompt("Digite um numero  para ver a tabuada de 1 a 10")); //armazenara o valor do usuario

if(!isNaN(numero)){
    let resultado = "";

    for(let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + " | " //concatena a multiplicação
    }
alert("Tabuada de " + numero + ": " + resultado);
}else{
alert("Voce digitou um número inválido."); //exibe uma mensagem falando que ta errado
}