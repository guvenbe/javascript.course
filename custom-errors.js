//Creating errors

class MyError extends Error {
    constructor(message){
    super(message)
    this.name = "MyError"
    }
}
const err3 = new MyError("Ooops 2")



const err = new Error("oops")
console.log(err.name)
console.log(err.message)
console.log(err.stack)

const err2 = new SyntaxError("oops")

