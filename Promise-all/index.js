let user1El = document.getElementById('user1')
let user2El = document.getElementById('user2')
let user3El = document.getElementById('user3')
let displayBtn = document.getElementById('display-users')
displayBtn.textContent = 'Display Users'

let isShowing = false

async function fetchData() {
    const usersResponse = await fetch('data/users.json')
    const colorsResponse = await fetch('data/colors.json')
    const usersJSON = await usersResponse.json()
    const colorsJSON = await colorsResponse.json()

    return {
        user1: `${usersJSON[0].name} is ${usersJSON[0].age} years old and their favorite color is ${colorsJSON[0]}`,
        user2: `${usersJSON[1].name} is ${usersJSON[1].age} years old and their favorite color is ${colorsJSON[1]}`,
        user3: `${usersJSON[2].name} is ${usersJSON[2].age} years old and their favorite color is ${colorsJSON[2]}`
    }
}

function callData() {
    fetchData()
    .then((results) => {
        user1El.textContent = ` ${results.user1}`
        user2El.textContent = ` ${results.user2}`
        user3El.textContent = ` ${results.user3}`
    })
    isShowing = true
}

// toggle button
displayBtn.addEventListener('click', () => {
    if (isShowing === false) {
        callData()
        displayBtn.textContent = 'Hide Users'
    } else {
        user1El.textContent = ` `
        user2El.textContent = ` `
        user3El.textContent = ` `
        isShowing = false
        displayBtn.textContent = 'Display Users'
    }
})

// // fetch data from JSON files
// const fetchUsers = fetch('data/users.json')
// const fetchColors = fetch('data/colors.json')

// Promise.all([fetchUsers, fetchColors])
//     .then(values => {
//         // convert values from arrays into json
//         return Promise.all(values.map((response) => response.json()))
//     })
//     // .then((values) => {

//     // })
//     // destructure array instead so they can be called separately
//     .then(([users, colors]) => {
//         for (let i = 0; i < users.length; i++) {
//             userEl.textContent += ' ' + users[i].name
//         }
//         for (let i = 0; i < colors.length; i++) {
//             ageEl.textContent += ' ' + users[i].age
//         }
//         colorsEl.textContent += colors.map((color) => color).join(', ')
//     })
//     .catch(() => console.error('unsuccessful fetch'))




