/*
Capture 10 itens para compor a lista de um supermercado.

Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

list = [];

for (let item = 0; item < 10; item++){
  let itemName = prompt(`Digite o ${item + 1}º item`)
  
  list[item] = itemName
}
alert(list)
alert(list[20])