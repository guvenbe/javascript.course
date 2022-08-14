//Async await
const customers = new Promise((resolve, rejects) =>{
    return Promise.resolve().then(()=>{
        let i =0
        while( i<2_000_000_000) i++
        resolve([
            {name: 'Jamila', id: 1},
            {name: 'Bob', id: 1}
        ])
    })
})
const address = new Promise((resolve, rejects) =>{
    return Promise.resolve().then(()=>{
        let i =0
        while( i<2_000_000_000) i++
        resolve([
            {customerId: 1, address: "Landon"},
            {customerId: 2, address: "USA"}
        ])
    })
})