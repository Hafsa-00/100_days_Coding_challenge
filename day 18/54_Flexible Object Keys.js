"use strict";
function createObj(key, value) {
    return { [key]: value };
}
let userPref = createObj("theme", "dark");
console.log(userPref); // { theme: 'dark' }
