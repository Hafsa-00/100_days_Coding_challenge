"use strict";
//Addition
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));
//Subtraction
function makeminuser(valueToMinus) {
    return function (number) {
        return number - valueToMinus;
    };
}
let minusFive = makeminuser(5);
console.log(minusFive(10));
//multiplication
function makeMultiplyer(valueToMultiply) {
    return function (number) {
        return number * valueToMultiply;
    };
}
let multiplyFive = makeMultiplyer(5);
console.log(multiplyFive(10));
//division
function makeDivisor(valueToDIVIDE) {
    return function (number) {
        return number / valueToDIVIDE;
    };
}
let DIVIDEFive = makeDivisor(5);
console.log(DIVIDEFive(10));
