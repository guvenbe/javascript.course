import {Person, SoftwareEngineer} from "./classes.js";

const alex = new Person("ALEX","SMITH","MALE" ,25)
const marry = new Person("MARRY","JONES","FEMALE", 25)
const bob = new SoftwareEngineer("BOB", "JACKSON", "MALE", 56, ["JAVA", "C++"])
//properties
console.log(alex.firstName + " "+ alex.lastName + alex.gender + " " + alex.age)
console.log(alex.fullName) //get

alex.fName ="ALEXANDER"

//behaiviours
alex.sleep()
alex.eat()
console.log(alex.toString())
console.log(bob)
console.log(bob.firstName + " "+ bob.lastName + " " + bob.gender + " " + bob.age)
bob.sleep();
bob.eat();
console.log(bob.toString())
bob.code()
