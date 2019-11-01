function getItems(url) {
  return fetch(url)
    .then(response => response.json());
}

export { getItems };
