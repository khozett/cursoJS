const car = {
  name: "Corolla",
  color: "black",
  fabrication: 2023,
  "size-car": "4 m",
  "air-bag": true,
}

//acessar propriedades de um objeto

console.log(car.name);

//modificando o valor de uma propriedade

car.name = "honda civic";

console.log(car.name)

//criar nova propriedade

console.log('-----------')

console.log(car.age);
car.age = 3;

console.log(car.age);

console.log('-----------')
//deletar

delete car.age
console.log(car.age)
console.log('-----------')
//verificacao

if ("name" in car){
  console.log("nome existe dentro de carro");
}else{
  console.log("nome não existe dentro do carro")
}
console.log('-----------')

//objetos e arrays

const cars2 = [
  {
    id: 1,
    name: "Corolla",
  },
  {
    id: 2,
    name: "Honda Civic",
  },
  {
    id: 3,
    name: "Ferrari",
  },
  
]
//resolução do exercicio proposto

//acessando cada nome dentro do objeto
cars2.forEach((item) => console.log(item.name));

console.log("=================================")

//acessando com um loop
for (cars1 of cars2){
  console.log(cars1.name);
}

//ADD OBJETO

cars2.push({
  id: 4,
  name: "Jaguar"
})

console.log(cars2, "com push")