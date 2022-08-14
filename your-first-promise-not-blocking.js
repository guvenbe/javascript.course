console.log("syncronous 1:")

const promise = new Promise((resolve, reject) =>{
    return Promise.resolve().then(() =>{
        
        let i = 0
        while (i< 1_000_000_000_0){
            i++
        }
        //this is still being blocked
        resolve("data back from the server")
    })
});
    
//This is not blocking
promise.then(res =>{
    console.log(res)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("done")
})
console.log("syncronous 2:")