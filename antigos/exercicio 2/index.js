let soma=0;
let numero="";
let i=0;
for(i=1;i<=10;i++){
    numero=prompt(`Digite o numero ${i}`); //dica do professor márcio
    soma = soma + parseFloat(numero);
} 
console.log(soma)