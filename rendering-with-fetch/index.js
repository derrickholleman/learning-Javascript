const textContainer = document.getElementById("text-container");
const inputEl = document.getElementById("amount");

// prevent default on form submit
const amountForm = document.getElementById('amountForm')
amountForm.addEventListener("submit", function(event) {
  event.preventDefault();
}, true);

let amount = 0;

async function getUsers(num) {
  const url = `https://randomuser.me/api/?results=${num}&nat=us`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

async function renderUsers() {
  // passes in the number from localStorage
  const data = await getUsers(JSON.parse(localStorage.getItem("amount")));
  data.results.map((person) => {
    textContainer.innerHTML += `
     <p>${person.name.first} ${person.name.last} lives in ${person.location.city}, ${person.location.state}
     `;
  });
}

function submitForm() {
  if (inputEl.value.length === 0) {
    return null
  }
    textContainer.innerHTML = "";
    amount = inputEl.value;
    localStorage.setItem("amount", JSON.stringify(amount));
    renderUsers();
    inputEl.value = ''
}
