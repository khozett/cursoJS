var minhaVariavel = "Olá";

var booleano = true //false

console.log (typeof booleano);

var meuObjeto = {};
var meuArray = {};
var meuNull = null;
var meuUndefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

//let e const

let x = 10;
const y = 5;

console.log(typeof x);

console.log (x, y);

//operadores artitméticos

console.log(y + x);
console.log(y - x);
console.log(y * x);
console.log(y / x);
console.log(y % x);


//operadores de comparação

console.log ( "5" == y);
console.log ("5" != y);
console.log ("5" === y);

// operadores logicos

// AND &&
// OR ||

console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 > 5 && 20 > 5);
console.log(10 < 5 && 20 < 5);

//estrutura de condicao if, else else if

const idade = 20;

if(idade < 13){

    console.log("Criança");
} else{
    console.log("Adulto");
};