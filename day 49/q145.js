"use strict";
// This function accepts a callback function and invokes it with given arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); // Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
const add = (a, b) => {
    console.log(a + b); // Outputs the sum of a and b
};
executeCallback(add, 5, 3);
