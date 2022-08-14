const a =[1,2,3,4]
const b = [5,6]
const numbers = [...a, ...b]
console.log(numbers)

const add = (n1, n2) => n1 + n2
//takes only the first 2 elements
console.log(add(...b))