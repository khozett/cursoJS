
async function loadData(){

  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
  
    for (const item of data){
      console.log(item.name);
    }
  }
  catch(err){
    console.log(err.massage);
    console.log("O programa falhou, consulte um adm...")
  }finally {
    console.log("O finally executou")
  }
}

loadData()