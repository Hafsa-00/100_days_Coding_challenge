function remove<T>( array :T[]):T|undefined {
    return array.pop();
}
console.log( remove(['apple','banana','kiwi']));



function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop(); 
}


const fruit: string[] = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruit)); // Outputs: 'Cherry'
console.log(fruit); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.
