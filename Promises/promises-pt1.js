// let Promise = fetch(url)
// .then() = promise fulfilled
// .catch() = promise rejected

// function APIFetch() {
//   fetch(ghibliMovie)
//     .then((response) => response.json())
//     .then((movie) => {
//       movieTitle.textContent = movie.title;
//       movieDescription.textContent = movie.description;
//     })
//     .catch(() => console.log("unsuccessful!"));
// }

let word = "pray";

const ghibliMovie = `https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a`;
const wordnikAPI = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7`;

let movieTitle = document.getElementById("movie-title");
let movieDescription = document.getElementById("movie-description");
let wordNikSynonyms = document.getElementById("synonyms");
let rhymingWords = document.getElementById("rhymes");

function APIFetch() {
  fetch(ghibliMovie)
    .then((response) => response.json())
    .then((movie) => {
      movieTitle.textContent = movie.title;
      movieDescription.textContent = movie.description;

      return fetch(wordnikAPI);
    })
    .then((response) => response.json())
    .then((wordnikRes) => {
        for (let i = 0; i < wordnikRes.length; i++) {
          if (wordnikRes[i].relationshipType === 'synonym') {
            wordNikSynonyms.textContent = `${word} synonyms: ` + wordnikRes[i].words.map((word) => word).join(", ")
          } else if (wordnikRes[i].relationshipType === 'equivalent') {
            wordNikSynonyms.textContent = `${word} synonyms: ` + wordnikRes[i].words.map((word) => word).join(', ')
          }
        }

        for (let i = 0; i < wordnikRes.length; i++) {
          if (wordnikRes[i].relationshipType === 'rhyme') {
            rhymingWords.textContent = `Words that rhyme with ${word}: ` + wordnikRes[i].words.map((word) => word).join(", ")
          }
        }
    })
    .catch(() => console.log("unsuccessful!"));
}
APIFetch()