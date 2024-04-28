

function replace (item : string []):string{
    let index = item.indexOf('banana');
    return item[index] = 'mango'
}
let item:string[]= ['apple','kiwi','banana','orange'];
replace(item);
console.log(item);
