"use strict";
function areStringsEqualIgnoreCase(str1, str2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(areStringsEqualIgnoreCase("hello", "Hello"), areStringsEqualIgnoreCase("world", "Word"), areStringsEqualIgnoreCase('hEY', 'hey'));
