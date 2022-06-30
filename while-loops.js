var names = [
    "Alex",
    "Jamilia", 
    "Joe", 
    "Aisha"
];
var index = 0
while(index<names.length){
    console.log("index=" + index + " " + names[index]);
    index++
}

console.log("do\n\n\n");

index = 0
do{
    console.log("index=" + index + " " + names[index]);
    ++index
}while(index<names.length)