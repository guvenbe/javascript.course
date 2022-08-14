// npm init -y
// add following for ES6
//  npm init -y
// or run
// node --experimental-modules index.js
import 
    xbrand, //this is the defual export 
    //{add, subtract} 
    * as LIB                  //import all as LIB
from './lib.js'

console.log(xbrand)

//console.log(add(2,5))
//console.log(subtract(2,5))
console.log(LIB.add(2,5))
console.log(LIB.subtract(2,5))
console.log(LIB.brand)