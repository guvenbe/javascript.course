//Arrays redcuce
const numbers = [1,2,3,4,5]

const result = numbers.reduce((x,y)=>x +y)
const result2 = numbers.reduce((accumulator,current)=>accumulator +current)
console.log(result)
console.log(result2)