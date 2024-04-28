"use strict";
function divisible2_3(number) {
    return number % 2 === 0 && number % 3 === 0;
}
console.log(divisible2_3(13), divisible2_3(25), divisible2_3(12));
