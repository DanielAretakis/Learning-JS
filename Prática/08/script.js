/*
  Crie uma lista de pacientes

  Cada paciente deverá conter
    Nome
    Idade
    Peso
    Altura
  
  Escreva uma lista contendo o nome dos pacientes
*/

let patientsList = [
  {
    name: "Daniel",
    age: 21,
    weight: 75,
    height: 175
  },
  {
    name: "Ladjane",
    age: 67,
    weight: 80,
    height: 160
  }
]

// let patientsName = []

for (let patient of patientsList){
 // patientsName.push(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kgs e tem uma altura de ${patient.height}cm `)
  alert(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kgs e tem uma altura de ${patient.height}cm`)
}

// alert(patientsName)
