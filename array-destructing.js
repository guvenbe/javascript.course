// Arrays Destructing

const names = [
    "james",
    "Mariam",
    "Jamal",
    "Aisha",
    "Alex"
]

const james = names[0];
const mariam = names[1]

console.log(james)

const[James, Mariam, Jamal, ...rest] = names
console.log(rest)
console.log(james + " " + Mariam + " " + Jamal + " " + rest)