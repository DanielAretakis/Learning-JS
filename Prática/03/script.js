/*

  Capturar 2 números e fazer as operações matemáticas de soma, subtração, multiplicação, divisão e resto da divisão.

  E para cada operação, mostrar um alerta com o resultado

*/

let numberOne = prompt("Digite o primeiro número: ")
numberOne = Number(numberOne)
let numberTwo = prompt("Digite o segundo número: ")
numberTwo = Number(numberTwo)
alert('Soma: ' + (numberOne + numberTwo))
alert('Subtração: ' + (numberOne - numberTwo))
alert('Multiplicação: ' + (numberOne * numberTwo))
alert('Divisão: ' + (numberOne / numberTwo))
alert('Resto da divisão: ' + (numberOne % numberTwo))