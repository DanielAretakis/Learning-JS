/*

Faça um programa que tenha um menu e apresente a seguinte mensagem:

Olá usuário! Digite a opção desejada

  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa

---

O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item na lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
  Se não houver nenhum item cadastrado, mostrar a mensagem:
    "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let option

let list = []
// let count = 0

while (option != 3) {
  option = Number(
    prompt(`Olá usuário! Digite a opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa`)
  )

  if (option == 1) {
    /*
    list[count] = prompt("Digite o item que deseja adicionar:")
    count++ 
    */

    let item = prompt('Digite o item que deseja adicionar:')
    list.push(item)
  } else if (option == 2) {
    if (list.length == 0) {
      alert('Não existem itens cadastrados')
    } else {
      alert(list)
    }
  } else if (option == 3) {
    alert('Até mais :)')
  } else {
    alert('Opção não encontrada')
  }

  /*
  switch (option) {
    case 1:
      
      // list[count] = prompt("Digite o item que deseja adicionar:")
      // count++ 
      

      let item = prompt('Digite o item que deseja adicionar:')
      list.push(item)
      break
    case 2:
      if (list.length == 0) {
        alert('Não existem itens cadastrados')
      } else {
        alert(list)
      }
      break
    case 3:
      alert('Até mais :)')
      break
    default:
      alert('Opção não encontrada')
  }
  */
}
