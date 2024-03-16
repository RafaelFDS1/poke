const request = (pokemon = "") => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export default request;
