const numbers = [1, 2, 3, 4, 5, 6];

const [primeira, segunda, terceira, ...resto] = numbers;

console.log(primeira, segunda, terceira, resto);

const person = {
  name: "Sergio",
  age: 24,
  city: "Santo Andre",
};

const {name, city, age} = person;

console.log(name, city)