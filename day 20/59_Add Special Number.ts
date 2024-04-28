//Addition
function makeAdder(valueToAdd: number): (number) => number {
    return function(number: number): number {
        return number + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));

//Subtraction
function makeminuser(valueToMinus: number): (number) => number {
    return function(number: number): number {
        return number - valueToMinus;
    };
}
let minusFive = makeminuser(5);
console.log(minusFive(10));

//multiplication
function makeMultiplyer(valueToMultiply: number): (number) => number {
    return function(number: number): number {
        return number * valueToMultiply;
    };
}
let multiplyFive = makeMultiplyer(5);
console.log(multiplyFive(10));

//division
function makeDivisor(valueToDIVIDE: number): (number) => number {
    return function(number: number): number {
        return number / valueToDIVIDE;
    };
}
let DIVIDEFive = makeDivisor(5);
console.log(DIVIDEFive(10));