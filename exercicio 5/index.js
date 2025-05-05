
    const num1 = parseInt(prompt("Coloque o primeiro número:")); //armazenara o numero

    const num2 = parseInt(prompt("Coloque o segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Digite um número válido");
    } else {
        let NumPares = ""; // Variável para guardar os números pares colocados
        let inicio, fim;

        if (num1 < num2) {
            inicio = num1;
            fim = num2;
        } else {
            inicio = num2;
            fim = num1;
        }

        for (let i = inicio; i <= fim; i++) { 
            if (i % 2 === 0) {
                NumPares += i + " ";
            }
        }

        if (NumPares === "") { 
            alert("Não há números pares no intervalo.");
        } else {
            alert(`Números pares no intervalo de ${inicio} até ${fim} : ${NumPares}`); //Exibe os numeros pares que foram encontrados
        }
    }

