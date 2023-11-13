const peoples = ["Sergio", "Camila"];
console.log(peoples.length, "peoples.length");

console.log(peoples[2], "posição 2");

//add um elemento no final do array

peoples.push("Jorge");

console.log(peoples[2], "posição 2")


//remove o elemento final
peoples.pop()

console.log(peoples[2],"posição 2");

function logPosition(item){
  console.log(item)
}
// percorre todos os elementos do array
peoples.forEach(logPosition)

peoples.forEach((item, index) => console.log(item, index))


//percorre e retorna um novo array

const otherPeoples = peoples.map((peoples => peoples));
console.log(otherPeoples, "otherPeoples");

//procura um item no array
const myNamePosition = peoples.find((item) => item === "Sergio")
 console.log(myNamePosition)

 //procura o index no array

const myNamePositionIndex = peoples.findIndex((item) => item === "Sergio")
 console.log(myNamePositionIndex);

//filtra um determinado item
const filterPeoples = peoples.filter((item) => item.length < 3);
 console.log(peoples, "peoples")
 console.log(filterPeoples, "filterPeoples")

 //splice remove um determinado item do array

 console.log(peoples, "antes do splice")

 peoples.splice(1);

 console.log(peoples, "dps do splice")