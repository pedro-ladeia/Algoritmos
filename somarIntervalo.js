function somar(arr) {
    let total = 0
    if (arr[0] < arr[1]) {
            for (let c = arr[0]; c <= arr[1]; c++) {
                    total += c
    }
}
    else{
            for (let c = arr[1]; c <= arr[0]; c++) {
                    total += c
            }
    }

    return total
}

/* O programa calcula a soma entre um intervalo de números.
A função recebe um array contendo os dois números que delimitam o intervalo
e declara uma variável para receber o resultado. Um if é criado para 
verificar se o primeiro valor é maior do que o segundo. Através do laço for
a variável c é incializada contendo o valor do menor número, o c é somado
a cada valor que possui dentro do laço e armazenado dentro da variável total. A 
mesma lógica vale para o else, apenas com a diferenciação de o primerio valor ser 
maior do que o segundo.*/