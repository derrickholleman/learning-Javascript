const axios = require("axios");
const url = "http://localhost:5000/users";

function getUsers() {
  return axios.get(url).then((response) => console.log(response.data));
}
// getUsers()

function createUser() {
    return axios.post(url, {
        "id": 4,
        "name": "Darryl",
        "city": "Denver",
        "age": 66
    })
    .then((response) => console.log(response.data))
    .catch((err) => console.error(err))
}
// createUser()

function deleteUser(id) {
    return axios.delete(`${url}/${id}`)
    .then(() => console.log(`deleted user ${id} successfully`))
    .catch((err) => console.error(err))
}
// deleteUser(4)

function updateUser(id) {
    return axios.put(`${url}/${id}`, {
        "name": "Paul",
        "city": "New York City",
        "age": 60
    })
    .then(() => console.log(`updated user ${id} successfully`))
    .catch((err) => console.error(err))
}
// updateUser(8)
