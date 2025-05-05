let soma=0 //essa variável armazenará a soma dos numeros colocados

for(let i =1;i<=10; i ++){ //essa variável controla o numero de vezes que o loop vai funcionar, no caso de um ate dez
    const Num = parseInt(prompt(`Coloque o número ${i}`)); //essa variável recebe o numero colocado 

    if(isNaN(Num) || Num<0){
        alert("Coloque um número válido!");
    }else {
        soma+=Num; //variavel que adiciona o numero a soma
    }
    alert(`O numero colocado foi ${Num}`);
    alert(`A soma dos números colocado é ${soma}`);
}