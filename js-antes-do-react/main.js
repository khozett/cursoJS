//objetos


const user = {
  name: 'Sérgio',
  idade: 18,
  endereco: {
    rua: 'bla',
    numero: '234'
  },

}



//desestruturação
const { endereco, name } = user


document.body.innerText = JSON.stringify({ endereco, name });