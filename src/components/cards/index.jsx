import "./Card.css";

const Cards = ({ object, pokeName }) => {
  return (
    <>
      <h1 className="pokemon-name-card"> Card</h1>
      {object.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.images.small} alt={pokemon.name} />
        </div>
      ))}
    </>
  );
};

export default Cards;
