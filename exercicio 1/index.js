const num = parseInt(prompt("Digite um número:")); // armazenará o numero colocado pela pessoa

if(isNaN(num) || num <=1) {
    alert("Você não escreveu um número válido"); // essa variável vai falar se a pessoa colocou um numero válido ou nao
} else {

    let sequencia = "" //armazena a sequencia dos numero gerados

    for (let i = 1; i <= num ; i++) 
       { sequencia = sequencia+ " " + i; //variavel que controla o loop que vai do numero 1 ate o numero colocado

       }
        alert(sequencia);
    
}
