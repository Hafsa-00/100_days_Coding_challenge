"use strict";
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
else if (currentTime.getHours() >= 12 && currentTime.getHours() < 18) {
    console.log("Good noon"); // It's afternoon if between 12 PM and 6 PM
}
else if (currentTime.getHours() >= 18) {
    console.log("Good evening"); // It's evening if after 6 PM
}
else {
    console.log("Good night"); // Added "Good evening" for other times
}
