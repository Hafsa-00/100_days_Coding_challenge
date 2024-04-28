"use strict";
const rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width; // 'this' accesses 'length' and 'width' properties of the object
    },
};
console.log(rectangle.calculateArea());
