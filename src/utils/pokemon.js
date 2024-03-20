const pokeRequest = (pokemon = "") => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

const tcgRequest = (pokemon = "") => {
  let url = `https://api.pokemontcg.io/v2/cards?q=!name:${pokemon}&pageSize=10`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export { pokeRequest, tcgRequest };
