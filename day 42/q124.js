"use strict";
const person = {
    name: "Alice",
    getName: function () {
        return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
    },
};
console.log(person.getName());
