//objects
const person ={
    firstName: "Bora",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1 ,28).toJSON(),
    address:{
        city: "London",
        postCode: "12345"
    },
    toString: function(){
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true,
    deleteMe2: true
}

console.log(person)
console.log(person.firstName)
console.log(person.balance)

console.log(person.age)
console.log(person.address)
console.log(person.address.city)
//values as an array
console.log(Object.values(person))
//key as an array
console.log(Object.keys(person))
//in string form
console.log(JSON.stringify(person))
console.log("\n")
console.log(person.toString())
console.log("\n")
//you can add a property to the object
person.lastName="Smith"


console.log(JSON.stringify(person))
person["lastName"] = "Jones"
console.log(JSON.stringify(person))
delete person.deleteMe
//or
delete person["deleteMe2"]
//loop through all the properties
console.log("===========================")
for(const p in person){
    console.log(p + "=======>"+person[p])
}
console.log("===========================")
console.log(Object.keys(person))
console.log(Object.values(person))
console.log("===========================")
//const firstName = person.firstName
//const age = person.age
//const balance = person.balance

//console.log(firstName)
//console.log(age)
//console.log(balance)

//or
console.log("===========================")
const { 
    firstName, 
    firstName : name, 
    age, 
    balance,
    //address : {city}
    address : {city : town} //rename to town
} = person
console.log(firstName)
console.log(name)
console.log(age)
console.log(balance)
//console.log(city)
console.log(town)