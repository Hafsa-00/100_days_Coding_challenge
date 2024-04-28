"use strict";
function averageScore(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScore(88, 89, 79, 90, 86, 91, 78));
