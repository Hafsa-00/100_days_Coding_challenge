"use strict";
const jsonString = '{"name":"Alice","age":30,"city":"Wonderland"}';
// Parses the JSON string back into a JavaScript object
const person1 = JSON.parse(jsonString);
console.log(person1);
