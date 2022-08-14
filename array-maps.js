//arrays
const numbers = [1,2,3,4,5]
numbers.forEach(number => console.log(number))
console.log("---------------------")
numbers[3] =55
console.log(numbers[3])

numbers.push(60)
console.log(numbers)

const indexOfFive = numbers.indexOf(5)
console.log(indexOfFive)
numbers.splice(indexOfFive ,1) //delete 5
console.log(numbers)
const numbersTimesTwo = numbers.map(number=>number*2)
numbers.map(x=>x+2)
numbers.map(x=>x+2).forEach(x=>console.log(x))
console.log(numbersTimesTwo)

