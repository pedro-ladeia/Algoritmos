function fatorial(numero){
    let soma = 1
    for(let c = numero; c >= 1; c--){
        soma *= c
    }
    return soma
} 
/* A função recebe um argumento, o numero a ser calculado o fatorial, e
através do laço for, o valor da variável c é atribuída a variável soma
e multiplica pelo valor de C - 1 e, armazenando a soma, a função retorna
soma */