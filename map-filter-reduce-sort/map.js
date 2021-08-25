let arr = [3, 5, 6, 0]

// map with arrow function
newArr = arr.map((num) => num >= 5 ? num * 2 : num)
console.log(newArr)


// map with normal function
function addFive(num) {
    return num + 5
}

console.log(arr.map(addFive))