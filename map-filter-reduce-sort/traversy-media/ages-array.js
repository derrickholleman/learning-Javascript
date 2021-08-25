const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Filter - filters items out of an array.  filtering for all ages above 21.
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink)

// Map ages of company and get square root
const agesTimesTwo = ages.map(age => age * 2);

console.log(agesTimesTwo)

// Sorting ages.  (sorting with numbers works differently and you do the sorting with subtraction to decide what the larger number is)
const sortAges = ages.sort((a, b) => a - b);
// if wanted in descending order do b - a

console.log(sortAges)

// Reduce.  find sum of all ages.  second parameter is starting number
sumOfAges = ages.reduce((total, age) => total + age, 0);

console.log(sumOfAges)