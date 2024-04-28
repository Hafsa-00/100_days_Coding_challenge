"use strict";
function filterGreaterThanTen(numbers) {
    return numbers.filter(number => number > 10);
}
// Example: Filtering an array of numbers
const numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers));
