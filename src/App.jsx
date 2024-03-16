import { useEffect, useState } from "react";
import "./App.css";
import Pokemon from "./components/pokemon";
import request from "./utils/pokemon";

const App = () => {
  const [success, setSuccess] = useState(false);
  const [pokemon, setPokemon] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    request(e.target[0].value).then((response) => {
      setPokemon(response);
      console.log(response);
    });
    e.target[0].value = "";
  };

  useEffect(() => {
    if (!success) {
      return;
    }
    console.log("sucesso!");
  }, [success]);

  return (
    <div className="app">
      <form onSubmit={onSubmit}>
        <input type="search" name="" id="input" />
      </form>
      {pokemon && <Pokemon object={pokemon} />}
    </div>
  );
};

export default App;
