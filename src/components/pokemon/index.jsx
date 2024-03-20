import { useState } from "react";
import "./Pokemon.css";
import "./types.css";

const Pokemon = ({ object }) => {
  const formatId = (id) => {
    return id.toString().padStart(4, "0");
  };

  const formatText = (text = "") => {
    return text.replace("-", " ");
  };

  return (
    <div className="pokemon">
      <h1 className="poke-name">
        {object.name} <span className="poke-id">Nº{formatId(object.id)}</span>
      </h1>
      <div className="poke-info">
        <div className="poke-sprite">
          <img
            src={object.sprites.other["official-artwork"].front_default}
            alt={object.name}
          />
        </div>
        <div className="poke-stats">
          <h2>Type</h2>
          <div className="poke-type">
            {object.types.map((obj, i) => {
              return (
                <div key={i} className={"type type-" + obj.type.name}>
                  <p>{obj.type.name}</p>
                </div>
              );
            })}
          </div>
          <div className="stats-container">
            <h2>Stats</h2>
            <div className="stats">
              {object.stats.map((obj, i) => {
                return (
                  <div key={i} className="stat">
                    <div className="stat-values">
                      {Array.from(
                        { length: 17 - Math.ceil(obj.base_stat / 17) },
                        (_, i) => (
                          <div key={i} className="stat-blank-value block"></div>
                        )
                      )}
                      {Array.from(
                        { length: Math.ceil(obj.base_stat / 17) },
                        (_, i) => (
                          <div key={i} className="stat-true-value block"></div>
                        )
                      )}
                    </div>
                    {formatText(obj.stat.name)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
