let exampleObj = {
    color: 'green',
    shirtSize: 'large',
    drink: 'water',
    age: 26,
    pet: 'dog'
}

let newObj = {
    ...exampleObj,
    shirtSize: 'medium',
    pet: 'cat'
}
console.log(newObj)
console.log(exampleObj)