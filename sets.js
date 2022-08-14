//sets (No Dublicates)

//this has duplicates
const numberArray = [1,1,2,2,3] 
console.log(numberArray)

const numberSet = new Set()
numberSet.add(1).add(1).add(2).add(2).add(3)
console.log(numberSet)
console.log(numberSet.delete(3))
console.log(numberSet.delete(6))
console.log(numberSet)
console.log(numberSet.has(2))
console.log(numberSet.has(6))
console.log(numberSet)
console.log(numberSet.size)
console.log("-----------------loop-------------------")
console.log("-----------------loop-------------------")
for (const e of numberSet) {
    console.log(e)
}

numberSet.forEach(e=> console.log(e))
console.log("-----------------loop-------------------")
console.log("-----------------loop-------------------")
console.log(numberSet.clear())
console.log(numberSet.size)
//convert to array
console.log(Array.from(new Set(numberArray)))