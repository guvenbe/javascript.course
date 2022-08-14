//Here is a object
const person = {
    firstName: "James",
    age: 2,
}

console.log(person)

const map = new Map()

map.set(1,"James")
map.set('1', 2)
map.set('1',3) //updates '1' s value to 3
console.log(map)