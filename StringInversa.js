function inverterstring(str){
    let arrayString = str.split('')
    let stringreversa = ''
    for(let c = arrayString.length - 1; c >= 0; c--){
            stringreversa += arrayString[c]
    }
    return stringreversa
}

/* A função recebe a string como argumento. Com o comando "split", a
string é convertida em um array de letras. A função utiliza o laço for
para percorrer todo o array de letras. A variável c é inicializada dentro
do laço e é atribuída a ela o valor do comprimento do array menos 1,
inicializada com o menos 1 pois o índice do array começa pelo 0, então
uma string com 3 letras, o último índice é o 2. */