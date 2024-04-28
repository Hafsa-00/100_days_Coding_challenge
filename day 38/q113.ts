const countries = new Map<string, string>();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("France", "Paris"); // Adds France to the Map
countries.set("Japan", "Tokyo"); // Adds Japan to the Map

console.log(countries);

function logCapitalOfCanada(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log(`The capital of Canada is ${countries.get("Canada")}`);
  } else {
    console.log("Canada is not in the Map.");
  }
}

// Assuming countries Map from Question 112
logCapitalOfCanada(countries);