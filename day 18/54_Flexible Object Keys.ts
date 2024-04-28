function createObj(key: string, value: string) {
  return { [key]: value };
}
let userPref = createObj("theme", "dark");
console.log(userPref); // { theme: 'dark' }
