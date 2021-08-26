let colorsEl = document.getElementById('colors')
let userEl = document.getElementById('user')
let ageEl = document.getElementById('age')

// fetch data from JSON files
const fetchUsers = fetch('data/users.json')
const fetchColors = fetch('data/colors.json')

Promise.all([fetchUsers, fetchColors])
    .then(values => {
        // convert values from arrays into json
        return Promise.all(values.map((response) => response.json()))
    })
    // .then((values) => {

    // })
    // destructure array instead so they can be called separately
    .then(([users, colors]) => {
        for (let i = 0; i < users.length; i++) {
            userEl.textContent += ' ' + users[i].name
        }
        for (let i = 0; i < colors.length; i++) {
            ageEl.textContent += ' ' + users[i].age
        }
        colorsEl.textContent += colors.map((color) => color).join(', ')
    })
    .catch(() => console.error('unsuccessful fetch'))




