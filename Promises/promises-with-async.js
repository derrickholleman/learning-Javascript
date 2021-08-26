let word = "cry";
// picks a random movie to display info from
let pickMovie = [
  '2baf70d1-42bb-4437-b551-e5fed5a87abe', '12cfb892-aac0-4c5b-94af-521852e46d6a', '58611129-2dbc-4a81-a72f-77ddfc1b1b49', 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e', '4e236f34-b981-41c3-8c65-f8c9000b94e7', 'ebbb6b7c-945c-41ee-a792-de0e43191bd8', '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c', 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3', '0440483e-ca0e-4120-8c50-4c8cd9b965d6', '0440483e-ca0e-4120-8c50-4c8cd9b965d6', 'dc2e6bd1-8156-4886-adff-b39e6043af0c', '90b72513-afd4-4570-84de-a56c312fdf81', 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa', '112c1e67-726f-40b1-ac17-6974127bb9b9', '758bf02e-3122-46e0-884e-67cf83df1786', '2de9426b-914a-4a06-a3a0-5e6d9d3886f6', '45db04e4-304a-4933-9823-33f389e8d74d', '67405111-37a5-438f-81cc-4666af60c800', '578ae244-7750-4d9f-867b-f3cd3d6fecf4', '5fdfb320-2a02-49a7-94ff-5ca418cae602', 'd868e6ec-c44a-405b-8fa6-f7f0f8cfb500'
]
let id = pickMovie[Math.floor(Math.random() * pickMovie.length - 1)]

const ghibliMovie = `https://ghibliapi.herokuapp.com/films/${id}`;
const wordnikAPI = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7`;

let movieTitle = document.getElementById("movie-title");
let movieDescription = document.getElementById("movie-description");
let wordNikSynonyms = document.getElementById("synonyms");
let rhymingWords = document.getElementById("rhymes");
let wordFromAPI = document.getElementById('word')
wordFromAPI.textContent = word

async function APIFetch() {
  // await fetch from ghibli API, set equal to response variable
  const movieResponse = await fetch(ghibliMovie);
  // set response data (JSON) equal to fetched data from API
  const movieJSON = await movieResponse.json();

  const wordResponse = await fetch(wordnikAPI);
  const wordJSON = await wordResponse.json();

  // getting synonyms from wordnik API using response variable as the array
  function getSynonyms() {
    let synonym;
    for (let i = 0; i < wordJSON.length; i++) {
      if (wordJSON[i].relationshipType === "synonym") {
        synonym =
          `${word} synonyms: ` +
          wordJSON[i].words.map((word) => word).join(", ");
      } else if (wordJSON[i].relationshipType === "equivalent") {
        synonym =
          `${word} synonyms: ` +
          wordJSON[i].words.map((word) => word).join(", ");
      }
    }
    return synonym;
  }
  // getting rhymes from wordnik API using response variable as the array
  function getRhymes() {
    let rhyme;
    for (let i = 0; i < wordJSON.length; i++) {
      if (wordJSON[i].relationshipType === "rhyme") {
        rhyme =
          `Words that rhyme with ${word}: ` +
          wordJSON[i].words.map((word) => word).join(", ");
      }
    }
    return rhyme;
  }

  return {
    // return data key: value pairs.  value being response.apiObjKey
    movie_title: movieJSON.title + ' ' + movieJSON.original_title,
    movie_description: movieJSON.description,
    // returning info back from function
    synonym: getSynonyms(),
    rhyme: getRhymes(),
  };
}

function callAPI() {
  APIFetch()
    // display results from return object and assign to HTML elements
    .then((results) => {
      movieTitle.textContent = results.movie_title;
      movieDescription.textContent = results.movie_description;
      wordNikSynonyms.textContent = results.synonym;
      rhymingWords.textContent = results.rhyme;
    })
    .catch(() => console.error("unsuccessful call"));
}
callAPI();
