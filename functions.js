function addNumbers(number1, number2) {
    var addition = number1 + number2;
    return addition
}

console.log(addNumbers()) //NaN
console.log(addNumbers(5,3))
var result = addNumbers(6,5)
console.log(result)

var person ={
    name: "jamila"
}

console.log(person.name.charAt(2))
console.log(Object.values(person));
console.log(Object.keys(person));
console.log("bora".substring(0,2))
console.log("bora".toUpperCase())
console.log("bora".toLocaleUpperCase())
console.log("bora".indexOf("o"))