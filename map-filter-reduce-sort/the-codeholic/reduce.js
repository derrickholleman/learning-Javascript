/* reduce reduces all elements of a previous array into a single element based on an argument.  which is then executed on the next element and so on.  good for adding together every element in an array */

const numbers = [1, 2, 4, 8];
sum = numbers.reduce((num1, num2) => num1 + num2);

console.log(sum)
/* 1 + 2 = 3.  3 + 4 = 7.  7 + 8 = 15. */