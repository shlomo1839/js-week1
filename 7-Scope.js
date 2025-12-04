
// variable global
let username = "ben"


function go(){
    // scope local 
    // const firstname = "shlomo"
    // console.log(firstname)
    // console.log(username)
    // // to use in global use in return
    // return firstname
    username = "shlomo"
}
go()
console.log(username)




// -----------examples-----------
// ---2.1---
// function printScore(score){
//     console.log(`score is: ${score}`);
// }
// let score = 80
// printScore(score)

// ---2.2---
// let grade = 50
// function increaseGrade(grade){
//     console.log(grade + 10);
// }
// increaseGrade(grade)

// ---2.3---
// let counter = 0
// function incrementCounter(){
//     console.log(counter += 1);
// }
// for(i=1; i<=3; i++){
//     incrementCounter()
// }
// console.log(counter)

// ---2.4---
// let name = "Outer"
// function printName(name){
//     console.log(name);
// }
// printName("inner")
// printName(name)

// ---2.5---
// function createSecret(){
//     let secret = 1234
// }
// createSecret()
// console.log(secret)
// // --> not accessible

// ---2.6---
// function sum(a, b){
//     return a + b
// }
// let a = 100
// let z = sum(5, 7)
// console.log(z)
// // --> a not affect

// ---2.7---
// function allStudents(student){
//     student.grade = 100
//     console.log(student);
// }
// student = {
//     grade: 70
// }
// allStudents(student)
// console.log(student.grade);
// // --> both change

// ---2.8---
// function arrayNumber(numbers){
//     let sum = 0
//     let i = 0
//     while(i <= numbers.length){
//         sum += i
//         i++
//     }
//     console.log(sum);
// }
// numbers = [1, 2, 3, 4]
// arrayNumber(numbers);

// ---2.9---
// function printMassge(massage){
//     if (typeof massage === 'string'){
//         console.log(massage);
//     } else if (!Object.assign(printMassge.arguments).length){
//         console.log("No massge");
        
//     }
// }
// printMassge("Hi")

// ---2.10---
// const baseScore = 50
// function addBonus(baseScore){
//     console.log(baseScore += 20);
// }
// addBonus(baseScore)
// console.log(baseScore);