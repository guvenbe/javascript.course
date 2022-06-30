//var is BAD!

//it is like having 
// var i
//use let instead to avoid hoisting

for (let i =0; i<=10; i++){
    console.log("i=" + i);
}

console.log("i=" + i); //this will error

//output:
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
// ReferenceError: i is not defined
// at Object.<anonymous> (/Users/guvenbe/Desktop/javascript.course/let.js:11:20)
// at Module._compile (node:internal/modules/cjs/loader:1105:14)
// at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
// at Module.load (node:internal/modules/cjs/loader:981:32)
// at Function.Module._load (node:internal/modules/cjs/loader:822:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
// at node:internal/main/run_main_module:17:47