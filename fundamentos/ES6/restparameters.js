function sum (n1, n2){
  return n1 + n2;
}

console.log(sum(1,2))


function sum2 (...args){

  let total = 0;

  for (const number of args){
    total += number
  }

  const initialValue = 0

  const total2 = args.reduce(
    (acc, currentValue) => acc + currentValue, initialValue
  )

  return total
}

console.log(sum2(1, 2, 3, 4, 5))

function sum3 (...args){



  const initialValue = 0

  const total2 = args.reduce(
    (acc, currentValue) => acc + currentValue, 
    initialValue
  )

  return total2
}

console.log(sum3(1, 2, 3, 4, 5))