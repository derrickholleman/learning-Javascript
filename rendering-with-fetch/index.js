const textContainer = document.getElementById("text-container");
const inputEl = document.getElementById("amount");

// prevent default on form submit
const amountForm = document.getElementById("amountForm");
amountForm.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
  },
  true
);

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
    let {
      name: { first, last },
      location: { city, state },
    } = person;

    textContainer.innerHTML += `
     <p>${first} ${last} lives in ${city}, ${state}
     `;
  });
}

function submitForm() {
  if (inputEl.value.length === 0 || inputEl.value === 0) {
    return null;
  } else {
    localStorage.setItem("amount", JSON.stringify(inputEl.value));
    renderUsers();
    inputEl.value = "";
    textContainer.innerHTML = "";
  }
}
