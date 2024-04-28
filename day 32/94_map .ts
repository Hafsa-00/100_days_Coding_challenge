
const words: string[] = ["Hello", "World", "TypeScript", "JavaScript"];
// Uses .map() to create a new array with the length of each word
const lengths: number[] = words.map(word => word.length);

console.log(lengths); 