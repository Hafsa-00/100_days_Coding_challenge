"use strict";
function replace(item) {
    let index = item.indexOf('banana');
    return item[index] = 'mango';
}
let item = ['apple', 'kiwi', 'banana', 'orange'];
replace(item);
console.log(item);
