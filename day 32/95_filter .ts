

function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}

// Example: Filtering an array of numbers
const numbeR: number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbeR));