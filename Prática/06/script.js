/*
** Jogo da advinhação **

Apresente a mensagem ao usuário:
"Advinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não advinhar o número, apresentar a mensagem:
"Erro, tente novamente: "

Caso o usuário acerte o número, apresentar a mensagem:
"Parabéns! Você acertou em X tentativas"

Substitua o X pelo número de tentativas

*/

const syst = Math.round(Math.random() * 10)
let count = 0

let guess = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
count++

while (syst != guess){
  guess = prompt("Erro, tente novamente:")
  count++
}

alert(`Parabéns! Você acertou em ${count} tentativas`)