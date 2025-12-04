function multiply(num){
    return num * 2
}

function subtract(num){
    return num - 5
}

function divide(num){
    return num / 10
}




function start(val, func){
    return func(val)
}
console.log(start(5, multiply));
