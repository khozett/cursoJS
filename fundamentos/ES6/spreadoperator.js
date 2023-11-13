const array1 = [1, 2, 3, 4];
const array2 = [4, 5, 6];

//operador spread

const array3 = [...array1, ...array2];

console.log(array3)


const person = {
  id: 1,
  name: "Sergio"
}

const personAddress = {
  city: "Santo andre",
}

const completedPerson = {

  ...person,
  ...personAddress


}

console.log(completedPerson)