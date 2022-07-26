//Enhanced Object Properties
const calculator = (brand, price) =>({
    brand: brand,
    price: price,
})
const casio = calculator("casio", 10)
console.log(casio)

//Enhanced Objects way
const calculator2 = (brand, price) =>({
    brand,
    price,
})
const casio2 = calculator2("casio", 10)
console.log(casio2)
//Enhanced Objects way more
const brandProp = "BRAND"
const calculator3 = (brand, price) =>({
    [brandProp.toLowerCase()]: brand,
    price,
    getDiscount: function(){
        return this.price - (this.price * 0.30)
    }
})
const casio3 = calculator3("casio", 10)
console.log(casio3)
console.log(casio3.getDiscount())


//Enhanced Objects way more neater
const brandProp2 = "BRAND"
const calculator4 = (brand, price) =>({
    [brandProp2.toLowerCase()]: brand,
    price,
    getDiscount(){
        return this.price - (this.price * 0.30)
    }
})
const casio4 = calculator4("casio", 10)
console.log(casio4)