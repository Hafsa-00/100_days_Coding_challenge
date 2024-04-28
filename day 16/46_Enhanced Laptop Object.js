"use strict";
let laptop = {
    make: "dell",
    model: "xps 15",
    year: 2021,
    describe: function () {
        console.log(`this laptop is a ${this.year} ${this.make} ${this.model}`);
    },
};
laptop.describe();
