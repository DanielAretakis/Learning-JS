let numberOne = prompt("Type the first number: ")
numberOne = Number(numberOne) 
let numberTwo = prompt("Type the second number: ")
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = (numberOne / numberTwo).toFixed(2)
const rem = numberOne % numberTwo

alert("Sum: " + sum)
if (sum % 2 == 0){
  alert("The sum of both number is equal to a pair number")
} else{
  alert("The sum of both number is equal to a odd number")
}
alert("Subtraction: " + sub)
alert("Multiplication: " + mult)
alert("Division: " + div)
alert("Remainder: " + rem)

if (numberOne == numberTwo){
  alert("These numbers are equal")
} else{
  alert("These numbers are different")
}