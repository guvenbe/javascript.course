//Aync await
const customers = new Promise((resolve, reject) => {
    return Promise.resolve().then(() => {
        let i = 0;
        while (i < 2_000_000_000) i++
        resolve([
            { name: 'Jamile', id: 1 },
            { name: 'Bob', id: 1 }
        ])
    })
})
const address = new Promise((resolve, reject) => {
    return Promise.resolve().then(() => {
        //reject("opps error")
        let i = 0;
        while (i < 2_000_000_000) i++
        resolve([
            { cusomerId: 1, address: "London" },
            { cusomerId: 2, address: "USA" }
        ])
    })
})

// const fetchData = () =>{
//     customers.then(c=> {
//         address.then(a=> {
//             console.log(c)
//             console.log(a)
//         }).catch(err=>{
//             console.log(err)
//         })
//     }).catch(err=> {
//         console.log(err)
//     })
// }
//Instead use

const fetchData = async() =>{
    try{
        const c  = await customers;
        const a  = await address;
        console.log(c)
        console.log(a)
    }catch(error){
        console.log(error)
    }
}

fetchData();