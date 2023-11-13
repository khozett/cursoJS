function sumNumbers(n1, n2){
  const sum = n1 + n2;

  return sum;
}

function media(sum){
  const studentMedia = sum/2
  return studentMedia
}

const stunderScore = sumNumbers(10, 10)

console.log(media(stunderScore))

if (media(stunderScore === 10)){
  console.log("Melhor aluno")
}else if (media(stunderScore) < 5){
  console.log("Aluno em recuperação")
}else {
  console.log("Aluno passou")
}