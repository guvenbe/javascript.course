//objects
const jamila ={
    firstName: "Bora",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1 ,28).toJSON(),
    
    toString: function(){
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe: true,
    deleteMe2: true
}
const address ={
    city: "London",
    postCode: "12345"
    }
//combine them
const person = {
    firstName: jamila.firstName,
    age: jamila.age,
    address: {
        city: address.city,
        postCode: address.postCode,
    }
}
console.log(person)
console.log("-----spread-----")

const person2 ={
    ...jamila,
    ...address
}
console.log(person2)

const person3 ={
    ...jamila,
    addressX: {...address}
}
console.log(person3)