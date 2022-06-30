//var is BAD!

//it is like having 
// var i

for (var i =0; i<=10; i++){
    console.log("i=" + i);
}

console.log("i=" + i); //i is hoisted even i was inside scope of for loop

output:
// i=0
// i=1
// i=2
// i=3
// i=4
// i=5
// i=6
// i=7
// i=8
// i=9
// i=10
// i=11   <-- hoisted, this should not have printed