"use strict";
function leap_year(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(leap_year(2020), leap_year(2024), leap_year(3000));
