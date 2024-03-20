import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards";
import Pokemon from "./components/pokemon";
import { pokeRequest, tcgRequest } from "./utils/pokemon";

const App = () => {
  const [success, setSuccess] = useState(false);
  const [pokemon, setPokemon] = useState();
  const [cards, setCards] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    pokeRequest(e.target[0].value.toLowerCase()).then((response) => {
      setPokemon(response);
      setSuccess(true);
    });
    e.target[0].value = "";
  };

  useEffect(() => {
    if (!success) {
      return;
    }
    tcgRequest(pokemon.name).then((response) => {
      setCards(response);
      setSuccess(false);
    });
  }, [success]);

  return (
    <div className="app">
      <form className="form-container" onSubmit={onSubmit}>
        <input type="search" name="" id="input" />
      </form>
      {pokemon && <Pokemon object={pokemon} />}
      {cards && <Cards object={cards.data} />}
    </div>
  );
};

export default App;
