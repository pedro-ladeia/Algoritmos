function palindrome(str) {
    let stringInversa = ''
    let minus = str.toLowerCase()
    let strin = minus.replace(/\W/g, '')
    let arr = strin.split('')
    for (let c = arr.length - 1; c >= 0; c--) {
        stringInversa += arr[c]
    }
    let texto = arr.join('')
    if (texto === stringInversa) return true
    else return false
    
}

/* O programa é um palíndromo, verificar se uma string da direita para esquerda 
ou da direita para esquerda é um palíindromo, ex: mom, Race car. A função recebe a string
como argumento e padroniza para tornar a string em minúscula e removendo todos os caracteres
que não são alfanumericos, o laço for transforma a string no inverso da mesma.
A função retorna verdadeiro no caso de ser palíndromo, e falso se não for.
O comando toLowerCase transforma a string em minusculas e, o comando replace, em conjunto com 
o regex trasnforma todo caractere que não for alfanumerico em "nada", ou seja, remove,
o split transforma a string, já modificada, em um array de letras para poder ser usado no for
o comando join junta os elementos do array em uma string e, o teste que irá retornar true ou false.*/