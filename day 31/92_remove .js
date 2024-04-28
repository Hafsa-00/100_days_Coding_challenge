"use strict";
function remove(array) {
    return array.pop();
}
console.log(remove(['apple', 'banana', 'kiwi']));
function removeLastElement(arr) {
    return arr.pop();
}
const fruit = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruit)); // Outputs: 'Cherry'
console.log(fruit); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.
