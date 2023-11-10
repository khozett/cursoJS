//objetos


const user = {
  name: 'Sérgio',
  age: 18,
  andress: {
    street: 'bla',
    number: '234'
  },

}


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

const {name, ...rest} = user;

document.body.innerText = JSON.stringify(rest)
