function multiplyByFive(num){
    return num*5
}
const number1 = multiplyByFive(5)
console.log(number1);
const number2 = multiplyByFive
console.log(number2(6));


function upperCase(word){
    console.log(word.toUpperCase())
}
upperCase("ben")


function getYear(age){
    const date = new Date()
    const yearBirth = date.getUTCFullYear()-age
    console.log(yearBirth);
}
getYear(27)




const add = (a, b) => {a+b}
const subtract = (a, b) => {a - b}
const multipy = (a, b) => {a * b}
const divide = (a, b) => {a / b}

add = (a, b) => a+b
subtract = (a, b) => a - b
multipy = (a, b) => a * b
divide = (a, b) => a / b

const arrCalc = [add,multipy,subtract,divide]
const [firstAdd, secondAdd] = arrCalc
console.log(firstAdd(4, 8));


const calculater = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multipy: (a, b) => a * b,
    divide: (a, b) => a / b
}
cal = calculater
console.log(cal.subtract(8, 7));

