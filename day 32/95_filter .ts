

function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

// Example: Filtering an array of numbers
const numbers: number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers));