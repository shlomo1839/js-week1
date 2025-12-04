// -----methodes of array-----

// -------foreach-------
// -------one-way-------
// const numbers = [1, 2, 3, 4, 5, 6]
// function double(num, index, arr){
//     arr[index] = num * 2;
// }
// console.log(numbers);
// numbers.forEach(double)
// console.log(numbers);

// -------second-way-------
// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers)
// console.log(numbers.forEach((num, index) => numbers[index] = (num*2)))
// console.log(numbers)






// ---------map--------
// -------example-------

const numbers = [1, 1100, 4, 9, 123455, 16];

// // Pass a function to map
// const mapped = numbers.map((number) => number * 2);
// console.log(mapped);
// // Expected output: Array [2, 8, 18, 32]


// ---find-first---
const first = numbers.find((num) => num > 1000)
console.log(first);

// ---find-last---
const last = numbers.findLast((num) => num > 1000)
console.log(last);


