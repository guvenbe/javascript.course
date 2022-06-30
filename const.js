//const
const brand = "Amigoscode";
//brand ="Ford" //This will error

console.log(brand);

const brandObject = {}
brandObject["brand"] = brand
console.log("brandObject.brand=" + brandObject.brand);

brandObject["brand"] = "Ford"
console.log("brandObject.brand=" + brandObject.brand);
// brandObject ={} //error no reassignment allowed

delete brandObject.brand
console.log(brandObject); //we can mutate. however can't reassign it

//assign function as constant
const hello = function(){

}

//instead of

function hello(){

}

// function can be assigne to number..This is bad
hello = 1