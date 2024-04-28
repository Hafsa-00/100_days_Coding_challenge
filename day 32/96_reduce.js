"use strict";
function calculateSum(numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
// Example: Calculating the sum of an array of numbers
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
