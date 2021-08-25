/* map returns a new array with the same number of items as old array, but they've all been modified and put into a new array */

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.map(a => a*a);
console.log(newArr);