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

// const fetchData = async() =>{
//         Promise.all([customers, address]).then(values =>{
//            //console.log(values) //returns an array
//            const[c, a] =values
//            console.log(a)
//            console.log(c)
//         }).catch(err=>{
//             console.log(err)
//         })
// }

const fetchData = async() =>{
    try{

        //use this  getting a and c dont depend on each other and you run both async
        const values = await Promise.all([customers, address]) //takes an array of proomises
        const [c, a] = values
        console.log(c)
        console.log(a)
    }catch(error){
        console.log(error)
    }
}


fetchData();