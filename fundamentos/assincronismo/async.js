// let result = [];
// const link = "https://jsonplaceholder.typicode.com/users"
// fetch (link)
//   .then((response) => response.json())
//   .then((json) => {
//     result = json;

//     for (const item of result){
//       console.log(item)
//       ;
//     }
//   });


async function loadData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  for (const item of data){
    console.log(item.name);
  }
}

loadData()