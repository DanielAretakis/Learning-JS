/*
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui IMC de: Y"

  Onde X é o nome do peciente e Y o IMC do mesmo

  Crie uma função para fazer o cálculo do IMC
*/

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  }
]

for (let patient of patients){
  let patientImc = imcCalc(patient.weight, patient.height)
  alert(`${patient.name} possui IMC de: ${patientImc}`)
}

function imcCalc(weight, height){
  const imc = (weight / ((height/100)**2)).toFixed(2)
  return imc
}

