//Addition
function makeAdder(valueToAdd: number): (number3:number) => number {
    return function(number3: number): number {
        return number3 + valueToAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));

//Subtraction
function makeminuser(valueToMinus: number): (numberS:number) => number {
    return function(numberS: number): number {
        return numberS - valueToMinus;
    };
}
let minusFive = makeminuser(5);
console.log(minusFive(10));

//multiplication
function makeMultiplyer(valueToMultiply: number): (numberm:number) => number {
    return function(numberm: number): number {
        return numberm * valueToMultiply;
    };
}
let multiplyFive = makeMultiplyer(5);
console.log(multiplyFive(10));

//division
function makeDivisor(valueToDIVIDE: number): (numberd:number) => number {
    return function(numberd: number): number {
        return numberd / valueToDIVIDE;
    };
}
let DIVIDEFive = makeDivisor(5);
console.log(DIVIDEFive(10));