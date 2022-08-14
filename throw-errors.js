//Creating errors

class MyError extends Error {
    constructor(message){
    super(message)
    this.name = "MyError"
    }
}

const  divide = (n1, n2) => {
    if (n2 == 0){
        throw new MyError("divide by zero error")
    }
    return n1/ n2;
}

try{
    //console.log(10 / 0) //get infinity error
    console.log(divide(10,0))
}catch (error){
    console.log(error)
}


