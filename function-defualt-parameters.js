const getBrand = (brand = "Buick") => ({
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`}
)
const brand = getBrand("GM")
console.log(brand)
console.log("\n")
console.log(JSON.stringify(brand, null, 1))

const brand2 =getBrand()
console.log(JSON.stringify(brand2, null, 1))


const getBrand2 = (brand = "Buick", a={"name1": "bora"}) => ({
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`,
    obj: a
}
)
const brand3 = getBrand2("GM")
console.log(brand3)
console.log("\n")
console.log(JSON.stringify(brand3, null, 1))

const brand4 =getBrand2()
console.log(JSON.stringify(brand4, null, 1))

const brand5 =getBrand2("Hummer", {name1: "BoB"})
console.log(JSON.stringify(brand5, null, 1))