var number = 12
if (number % 2 == 0){
    console.log("even");
} else {
    console.log("odd");
}

console.log("ternay version\n\n");

number %2 ==0 ?console.log("even") : console.log("odd");
var result = number %2 ==0 ?"even" : "odd";
console.log(result);
