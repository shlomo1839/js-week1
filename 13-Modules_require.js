// =========1===========
// const{double} = require("./13-Modules_func")

// const num1 = 1
// const num2 = 2

// console.log(double(num1, num2));



// =========2==========
// const maths = require("./13-Modules_expoerts")

// const{double, multipy, divide} = maths
// const num1 = 1
// const num2 = 2
// const doubledNumbers = maths.double(num1, num2)

// console.log(doubledNumbers);

// =========3============
// import { double, multipy, divide } from 13-Modules_expoerts
// const num1 = 1
// const num2 = 2
// const doubledNumbers = maths.double(num1, num2)
// const multipyNumbers = maths.multipy(num1, num2)
// const divideNumbers = maths.divide(num1, num2)

// console.log(doubledNumbers);
// console.log(multipyNumbers);
// console.log(divideNumbers);



const{add, sub} = require("./13-Modules_exports")

const num1 = 1
const num2 = 2

console.log(add(num1, num2));