function rot13(str) {
    let maisculas = str.toUpperCase()
    let arr = maisculas.split('')
    let aToM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
    let nToZ = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < aToM.length; j++) {
            if (arr[i] === aToM[j]) {
                arr[i] = nToZ[j]
            } else if (arr[i] === nToZ[j]) {
                arr[i] = aToM[j]
            }
        }
    }
    return  arr.join('')
}

/* O Programa é um decodificador de Cifras de Cesar, chave 13. Cifras de cesar é uma das formas mais antigas
do mundo de criptografia, o imperador usava para comunicar-se com seus generais sem risco vazamento em caso de 
interceptação. A criptografia consiste em pegar uma letra e pular x números de letras (chave) para corresponder, ex:
chave = 3, a letra "a" é equivalente a letra "d".*/

/*A função recebe a string encriptada como parâmetro, o primeiro passo é transformar a string toda em maiúscula e, transformando-a em
um array de letras, após isso, cria-se uma variável para armazenar as letras do alfabeto, e suas respectivas correspondentes
(chave 13). Um laço for é criado para percorrer todo o array (parâmetro passado) e, outro laço for é criado para percorrer o array de letras
que vão da letra A a letra M. Dentro do laço tem o primeiro if que verifica se o elemento do array é igual ao elemento do 
array que vai da letra A à letra M, assim que o teste der positivo, o elemento recebe a letra do array que vai do N ao Z,
transformando assim aquele elemento no elemento 13 letras a sua frente. O seguno if faz a mesma operação, invertendo apenas os
arrays.A função tem como retorno a string já modificada.*/ 