function reminder(a: number, b: number): number {
    return Math.round(a * b)/100 ;
}

let remind1 = reminder(90, 30);
let remind2 = reminder(57, 10);
let remind3 = reminder(9999, 3000);

console.log(`1: ${remind1},
2: ${remind2},
3: ${remind3}`);