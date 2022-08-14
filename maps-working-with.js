
const map = new Map()

map.set('name',"James")
map.set('age',22)
//or  chain

map.set("name", "jackson").set('age', 32).set('delete', true)
console.log(map)
console.log(map.size)
console.log(map.has('name'))
console.log(map.has('foo'))
console.log("----------------------")
console.log("----------------------")
console.log(map.keys())
for (const k of map.keys()){
    console.log(k)
}
for (const v of map.values()){
    console.log(v)
}
for (const entry of map){
    console.log(entry)
    console.log(entry[0])
    console.log(entry[1])
}
console.log("----------------------")
console.log("----------------------")
console.log(map.delete('delete'))
console.log(Object.fromEntries(map.entries()))


console.log(map.size)
map.clear()
console.log(map.size)
//create object from map


