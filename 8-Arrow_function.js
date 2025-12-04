// ---3.1---
// const sayHi = () => console.log("hi from arrow function");
// sayHi()


// ---3.2---
// const doubleNumber = (n) => {return n * 2}
// result = doubleNumber(5)
// console.log(result);

// ---3.3---
// const sumThree = (a, b, c) => {return a +b +c}
// result = sumThree(1, 2, 3)
// console.log(result);

// ---3.4---
// const getFirstElement = (arr) => {return arr[0]}
// returned = getFirstElement(["a", "b", "c"])
// console.log(returned);

// ---3.5---
// const isAdult = (age) => (age => 18) ? "true" : "false"
// console.log(isAdult(18));

// ---3.6---
// const square = (number) => number * number
// for(i=1; i<=3; i++){
//     console.log(square(i));
// }

// ---3.7---
// const getLength = (a) => {return a.length}
// console.log(getLength("hello"));

// ---3.8---
// const toUpperArray = (arr) => {
//     return arr.map(str => str.toUpperCase())
// }
// console.log(toUpperArray(["a", "b", "c"]));

// ---3.9---
// const sumArray = (arr) => {
//     let sum = 0
//     for(let i =0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// let result = sumArray([10, 20, 30])
// console.log(result);

// ---3.10---
// const createStudent = (name, age) => {
//     return {
//         name:name,
//         age: age
//     }
// }
// console.log(createStudent("dana", 16));
