var person ={
    firstName: "Bora",
    age: 21,
    isFemale: true,
    balnce: 100.32,
    dob: new Date(2000, 1 ,28).toJSON(),
    address:{
        city: "London",
        postCode: "12345"
    }
}

console.log(person)
console.log(person.firstName)
console.log(person.balnce)

console.log(person.age)
console.log(person.address)
console.log(person.address.city)
//values as an array
console.log(Object.values(person))
//key as an array
console.log(Object.keys(person))
//in string form
console.log(JSON.stringify(person))

