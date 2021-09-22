const textContainer = document.getElementById("text-container");

async function getUsers(num) {
  const url = `https://randomuser.me/api/?results=${num}&nat=us`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.results.map((person) => {
       textContainer.innerHTML += `
        <p>${person.name.first} ${person.name.last} lives in ${person.location.city}, ${person.location.state}
        `;
    });
  } catch (err) {
    console.error(err);
  }
}
getUsers(5);