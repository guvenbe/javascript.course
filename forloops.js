for(i=1; i<=5; ++i){
    console.log("i=" + i);
}

var names = [
    "Alex",
    "Jamilia", 
    "Joe", 
    "Aisha",
    "Bob"
];

for(i=0; i < names.length; ++i){
    console.log(names[i]);
}
console.log("");
console.log("for of");

for(const name of names){
    console.log(name);
}

console.log("");
console.log("for in");
for(const name in names){
    console.log(name);
}
console.log("foreach");
names.forEach(function(name){
    console.log(name);
})