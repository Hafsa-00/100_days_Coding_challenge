"use strict";
function logHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
logHobbies("cycling", "reading", "writing", "singing", "planting", "cooking", "painting");
