function Reminder(a: number, b: number): number {
  return a % b;
}
let reminder1 = Reminder(90, 30);
let reminder2 = Reminder(57, 10);
let reminder3 = Reminder(9999, 3000);

console.log(`1:${reminder1},
 2:${reminder2} , 
 3: ${reminder3}`);
