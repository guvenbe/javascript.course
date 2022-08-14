//Default exports
//const BRAND = "Amigoescode"

//export default BRAND

const BRAND2 ={
    brand : "Amigoscode",
    website: "amigos.code"
}
export default BRAND2

//export const add = (a,b) => a + b
//export const subtract = (a,b) => a - b
const add = (a,b) => a + b
const subtract = (a,b) => a - b

export {
    add,
    subtract,
    BRAND2 as brand
}