let soma = 0;// Variável para guardar os números

for (let i = 1; i <= 5; i++){

const número = parseFloat(prompt(`Coloque a nota ${i}`))


if (isNaN(número) || número < 0) { //verifica se o valor é valido 


alert("Erro, coloque uma nota válido.");


} else {

    soma += número;
    
    
    

} 
}
media = soma /5; //calcula a media das notas


alert(`a média das notas que foram colocadas: ${media}\ o resultado das notas colocadas foram: ${soma}`);// Exibe a média