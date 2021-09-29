const axios = require("axios");
const userURL = "http://localhost:5000/users";
const carURL = 'http://localhost:5000/cars'

function getUsers() {
  return axios.get(userURL).then((response) => console.log(response.data));
}
// getUsers()

function createUser() {
    return axios.post(userURL, {
        // id gets added automatically
        "name": "Mickey",
        "city": "Orlanda",
        "age": 50
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.error(err))
}
// createUser()

function deleteUser(id) {
    return axios.delete(`${userURL}/${id}`)
    .then(() => console.log(`deleted user ${id} successfully`))
    .catch((err) => console.error(err))
}
// deleteUser(4)

function updateUser(id) {
    return axios.put(`${userURL}/${id}`, {
        "name": "Mickey",
        "city": "Orlando",
        "age": 50
    })
    .then(() => console.log(`updated user ${id} successfully`))
    .catch((err) => console.error(err))
}
// updateUser(9)

function getCars() {
    return axios.get(carURL)
    .then((response) => console.log(response.data))
    .catch((err) => console.error(err))
}
// getCars()

function createCar() {
    return axios.post(carURL, {
        // id gets added automatically
        "make": "Ford",
        "model": "F150"
    })
    .then(() => console.log('car successfully added'))
}
// createCar()

