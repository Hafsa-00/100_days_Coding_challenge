function divisionAndRemainder(a: number, b: number): [number, number] {
  return [Math.floor(a / b), a % b];
}
console.log(`division is ${
  divisionAndRemainder(10, 3) 
}  is reminder`);
