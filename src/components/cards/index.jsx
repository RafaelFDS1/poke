import "./Card.css";

const Cards = ({ object, pokeName }) => {
  return (
    <>
      <h2 className="pokemon-name-card">{pokeName} TCG</h2>
      <div className="container-general">
        <div className="cards-container">
          {object.map((pokemon) => (
            <div className="poke-cards" key={pokemon.id}>
              <img src={pokemon.images.small} alt={pokemon.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
