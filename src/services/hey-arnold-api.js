const URL = 'https://hey-arnold-api.herokuapp.com/api/v1';

function getCharacters() {
  const url = URL + '/characters';
  return fetch(url)
    .then(response => response.json());
}

console.log(getCharacters());

export { getCharacters };
