//Lexical this 
//Method 1
const person = {
    firstName : "jamila",
    cars: ["Tesla", "Ferrari"],
    toString: function(){
        console.log(`Name: ${this.firstName}`)
        this.cars.forEach(function(car){
            //console.log(car)
            console.log(`Name: ${this.firstName} drives ${car}`)
        }.bind(this)) //Lexical this, brings name in to the inner scope
    },
    deleteMe: true
}

person.toString()
//Method 2
const person2 = {
    firstName : "jamila",
    cars: ["Tesla", "Ferrari"],
    toString: function(){
        console.log(`Name: ${this.firstName}`)
        const that = this
        this.cars.forEach(function(car){
            //console.log(car)
            console.log(`Name: ${that.firstName} drives ${car}`)
        }) //Lexical this, brings name in to the inner scope
    },
    deleteMe: true
}

person2.toString()
//Method 3 Arrow function
const person3 = {
    firstName : "jamila",
    cars: ["Tesla", "Ferrari"],
    toString(){
        console.log(`Name: ${this.firstName}`)
        this.cars.forEach(car => {
            //console.log(car)
            console.log(`Name: ${this.firstName} drives ${car}`)
        }) //Lexical this, brings name in to the inner scope
    },
    deleteMe: true
}
person3.toString()