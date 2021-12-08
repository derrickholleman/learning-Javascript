const temperatures = [76, 53, 3, 76, 22, 5]
let lowestTemp = Math.min(...temperatures)
console.log(lowestTemp)

// turning an array into a string
const tvShows = ['Spongebob', 'Its Always Sunny', 'South Park']
console.log(...tvShows)

// combining arrays 
const parents = ['Lorie', 'Steve']
const kids = ['Jake', 'Annie', 'Jess']
const fullFamily = [...parents, ...kids]
console.log(fullFamily)

// copying arrays (original one stays the same)
const dogs = ['Fido', 'Spot', 'Woof']
const newDogs = [...dogs]
newDogs.push('Tank')
console.log(newDogs)
console.log(dogs)

// adding a new todo object to todos array without mutating original array (for React)
const todos = [
    {user: 'Derrick', task: 'wash dishes', completed: false},
    {user: 'Stef', task: 'cook dinner', completed: false}
]
function addTodo(newTodo) {
    return [...todos, {...newTodo, completed: false}]
}
console.log(addTodo({name: 'Julie', task: 'feed dog'}))

// cocatenate arrays using a function
function joinArrays(arr1, arr2) {
    combinedArr = [...arr1, ...arr2]
    return combinedArr
}
console.log(joinArrays([1, 2, 3], [4, 5, 6]))

// put an array in the middle of another one 
let arr1 = ["bottom", "topping"]
let arr2 = ["tomatosauce", "vegetables", "cheese"]

function tuckIn(arr1, arr2) {	
	return [arr1[0], ...arr2, arr1[arr1.length - 1]]
}
console.log(tuckIn(arr1, arr2))