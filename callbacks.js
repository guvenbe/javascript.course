//callback a function that is passed to a function as parameter

const greetUser = (username, callback) =>{
    if(callback) {
        console.log(callback(username));
    } else {
        console.log(username)
    }
    
}

const cb =  username =>{
    return "hello " + username
}

greetUser("james", cb)

//or

greetUser("Bob", (username) =>{
    return "Good bye " + username
})
greetUser("james")