studentList = [
  {
    name: "Daniel",
    firstScore: 7,
    secondScore: 9
  },
  {
    name: "Geovana",
    firstScore: 4,
    secondScore: 8
  },
  {
    name: "Vitória",
    firstScore: 9,
    secondScore: 7
  },
  {
    name: "João",
    firstScore: 5,
    secondScore: 10
  },
  {
    name: "Diego",
    firstScore: 8,
    secondScore: 6
  }
]

for (let student of studentList){
  let average = averageScore(student.firstScore, student.secondScore)
  if (average >= 7){
    alert(`${student.name} has an average score of ${average}
    Congratulations ${student.name}, you were approved!`)
  } else{
    alert(`${student.name} has an average score of ${average}
    Sorry ${student.name}, try again`)
  }
}

function averageScore(firstScore, secondScore){
  const average = (firstScore + secondScore) /2
  return average
}