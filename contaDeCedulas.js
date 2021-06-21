let valor = 3933

let numero = valor
let cedulas = [200, 100, 50, 20, 10, 5, 2, 1]
let cedulas200 = 0
let cedulas100 = 0
let cedulas50 = 0
let cedulas20 = 0
let cedulas10 = 0
let cedulas5 = 0
let cedulas2 = 0
let cedulas1 = 0

for (let c = 0; c < cedulas.length; c++) {
  while (cedulas[c] <= valor) {
    if (cedulas[c] === 200) cedulas200++
    else if (cedulas[c] === 100) cedulas100++
    else if (cedulas[c] === 50) cedulas50++
    else if (cedulas[c] === 20) cedulas20++
    else if (cedulas[c] === 10) cedulas10++
    else if (cedulas[c] === 5) cedulas5++
    else if (cedulas[c] === 2) cedulas2++
    else if (cedulas[c] === 1) cedulas1++
    valor -= cedulas[c]
  }
}
console.log(numero)
console.log(`${cedulas200} notas de R$200,00`)
console.log(`${cedulas100} notas de R$100,00`)
console.log(`${cedulas50} notas de R$50,00`)
console.log(`${cedulas20} notas de R$20,00`)
console.log(`${cedulas10} notas de R$10,00`)
console.log(`${cedulas5} notas de R$5,00`)
console.log(`${cedulas2} notas de R$2,00`)
console.log(`${cedulas1} notas de R$1,00`)

/*Este algoritmo calcula o mínimo de cédulass necessárias para alcançar um determinado valor.
O algoritmo tem como entrada o valor. É declarado um array com todas as notas, e uma variável de contagem
para cada cédula.
O laço for percorre o array de cédulas. o Laço while repete a ação para cada cédula enquanto a mesma for menor
que o valor, o valor vai sendo subtraído pelo valor da cédula a cada laço. E junto ao laço, o if verifica o
valor da cédula e incrementa na variável sempre que a condição existir. É impresso na tela o valor e o número de cédulas.*/