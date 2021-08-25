let arr = [3, 5, 6, 0]

// filter with arrow function
console.log(arr.filter((num) => num >= 5))

// filter with normal function
function filterNums(num) {
    return num % 2 === 0
}
console.log(arr.filter(filterNums))