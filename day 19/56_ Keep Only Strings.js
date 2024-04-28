"use strict";
let mixedItems = [
    1,
    "apple",
    true,
    "banana",
    null,
    "cherry",
    undefined,
    "date",
    6.3,
    "carrot",
];
let words = mixedItems.filter((item) => typeof item === "string");
console.log(words);
