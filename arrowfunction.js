// const getBrand = function (brand){
//     console.log(brand)
//     return {
//         brand: brand,
//         website: `www.${brand}.com`
//     }
// }

//instead like this

const getBrand2 =  (brand) => {
    console.log(brand)
    return {
        brand: brand,
        website: `www.${brand}.com`
    }
}

//since we one parameter we ommit () around brand

// const getBrand = brand => {
//     console.log(brand)
//     return {
//         brand: brand,
//         website: `www.${brand}.com`
//     }
// }


const getBrand = brand => ({
        brand: brand,
        website: `www.${brand.toLowerCase()}.com`
    }
)
const brand = getBrand("GM")
console.log(brand)
console.log("\n")
console.log(JSON.stringify(brand, null, 1))


const add = (a,b) => a+b

const calculate = (a, b, sign) =>{
    switch(sign){
        case '+' :
            return a + b
        case '-' :
            return a - b
        default:
            //throw error

    }
}
