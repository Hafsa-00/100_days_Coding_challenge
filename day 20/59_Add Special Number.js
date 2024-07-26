"use strict";
//Addition
function makeAdder(valueToAdd) {
    return function (number3) {
        return number3 + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));
//Subtraction
function makeminuser(valueToMinus) {
    return function (numberS) {
        return numberS - valueToMinus;
    };
}
let minusFive = makeminuser(5);
console.log(minusFive(10));
//multiplication
function makeMultiplyer(valueToMultiply) {
    return function (numberm) {
        return numberm * valueToMultiply;
    };
}
let multiplyFive = makeMultiplyer(5);
console.log(multiplyFive(10));
//division
function makeDivisor(valueToDIVIDE) {
    return function (numberd) {
        return numberd / valueToDIVIDE;
    };
}
let DIVIDEFive = makeDivisor(5);
console.log(DIVIDEFive(10));
