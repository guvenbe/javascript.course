for (var i = 0; i<10; i++){
    if(i==5){
        break //stop at 5
    }
    console.log(i);
}


console.log("\n\ncontinue");
for (var i = 0; i<10; i++){
    if(i==5){
        continue //skip 5
    }
    console.log(i);
}

console.log("\n\ncontinue");

for (var i = 0; i<10; i++){
    if(i<5){
        continue
    }
    console.log(i); //only print after 5
}