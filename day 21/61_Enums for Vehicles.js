"use strict";
var vehicles;
(function (vehicles) {
    vehicles[vehicles["Car"] = 0] = "Car";
    vehicles[vehicles["Truck"] = 1] = "Truck";
    vehicles[vehicles["Motorcycle"] = 2] = "Motorcycle";
})(vehicles || (vehicles = {}));
console.log(vehicles.Car);
