const movieEl = document.querySelector(".movieEl");

async function getMovie(movieId) {
  const movieRes = await fetch(
    `https://ghibliapi.herokuapp.com/films/${movieId}`
  );
  const movieJSON = await movieRes.json();

  if (movieId) {
    movieEl.innerHTML = `
    <p>Name: ${movieJSON.title}</p>
    <p>Description: ${movieJSON.description}</p>
    <p>Director: ${movieJSON.director}</p>
    <img src=${movieJSON.image} alt="movie poster" />
    `;
  } else {
    movieEl.innerHTML = "";
  }
}
