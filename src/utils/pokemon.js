const pokeRequest = (pokemon = "") => {
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

// Implementar paginação
const tcgRequest = (pokemon = "", offset = 2) => {
  let url = `https://api.pokemontcg.io/v2/cards?q=!name:${pokemon}&pageSize=10&page=${offset}`;
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};

export { pokeRequest, tcgRequest };
