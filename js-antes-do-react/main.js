//objetos




//Nullish coalescing operator


//const idade = null;

//document.body.innerText = "Sua idade é: "+ (idade ?? 'Não informado');


//objetos


//document.body.innerText = (
  //'name' in user;
  //Object.values(user);
  //JSON.stringify(Object.values(user));
  //JSON.stringify(Object.entries(user));

//


//desestruturação


/**const { andress, name } = user


function mostraIdade(user){
  return user.age
}

document.body.innerText = mostraIdade(user)

//JSON.stringify({ endereco, name });*/


//Rest operator

//const {name, ...rest} = user;



//optional  chaining


const user = {
  name: 'Sérgio',
  age: 18,
  andress: {
    street: 'bla',
    number: '234',
    zip: {
      code: '123456789',
      city: 'sao paulo',
    }
  },

}



//document.body.innerText = user.andress ? user.andress.street: 'Nao informado';
//document.body.innerText = user.andress?.zip.code ?? 'não informado';


// métodos de array


const array = [1, 2, 3, 4, 5];

for (const i of array) {
  
  document.body.innerText +=1;

}

array.forEach(item=> {
document.body.innerText +=item
})


const newArray = array.map(item =>{
  return item *2;
})

document.body.innerText = JSON.stringify(newArray)