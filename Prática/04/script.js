/*
  Solicitar o nome do aluno e as 3 notas do bimestre e calcular a média daquele aluno

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a média
*/

alert('Olá, me diga o nome e as notas do aluno para podermos calcular a média')
let name = prompt('Qual o nome do aluno?')


let firstScore = prompt(`Qual a primeira nota de ${name}: `)
firstScore = Number(firstScore)

let secondScore = prompt(`Qual a segunda nota de ${name}: `)
secondScore = Number(secondScore)

let thirdScore = prompt(`Qual a terceira nota de ${name}: `)
thirdScore = Number(thirdScore)

const averageScore = (firstScore + secondScore + thirdScore) /3


if (averageScore >= 6){
  alert(`Parabéns, ${name}! Você passou no bimestre!
  Sua média foi ${averageScore.toFixed(2)}`)
}else if(averageScore < 3){
  alert(`Sinto muito, ${name}, você reprovou! Sua média foi de ${averageScore.toFixed(2)}`)
} else{
  alert(`Sinto muito, ${name}, você não conseguiu, mas estude para a prova de recuperação que você irar tirar de letra!!
Sua média foi ${averageScore.toFixed(2)}`)
}