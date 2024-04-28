//using let
let amount= 123;
amount= 1234;
console.log(amount);

//using const
const age = 18 ;
try {
    age = 19; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}

