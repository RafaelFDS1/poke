import "./Card.css";

const Cards = ({ object }) => {
  return (
    <>
      <h1>Card</h1>
      {object.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.images.small} alt={pokemon.name} />
        </div>
      ))}
    </>
  );
};

export default Cards;
