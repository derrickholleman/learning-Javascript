let user1 = 'derrickholleman'
let user2 = 'Carpe-liam'
let user3 = 'miguelh72'

let user1El = document.getElementById('user1El')
let user2El = document.getElementById('user2El')
let user3El = document.getElementById('user3El')

function fetchGithub() {
    fetch(`https://api.github.com/users/${user1}`)
    .then(response => response.json())
    .then((user) => {
        user1El.textContent = `${user.name} lives in ${user.location} and has ${user.public_repos} public repositories`
        // queues up next fetch with a return 
        return fetch(`https://api.github.com/users/${user2}`)
    })
    // next fetch's data
    .then(response => response.json())
    .then((user) => {
        user2El.textContent = `${user.name} lives in ${user.location} and has ${user.public_repos} public repositories`

        return fetch(`https://api.github.com/users/${user3}`)
    })
    .then(response => response.json())
    .then((user) => {
        user3El.textContent = `${user.name} lives in ${user.location} and has ${user.public_repos} public repositories`
    })
    .catch((err) => console.error(err))
}
fetchGithub()