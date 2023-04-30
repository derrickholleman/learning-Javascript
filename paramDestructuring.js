const testFunc = ({ firstName, color }) => {
    return `My name is ${firstName} and my favorite color is ${color}`
}

const firstName = 'Derrick'
const color = 'purple'

console.log(testFunc({ color, firstName }))