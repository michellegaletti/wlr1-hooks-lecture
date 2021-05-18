import React from "react";
import Poke from "./Poke";
import useAxios from "../hooks/useAxios";

const List = () => {
  //Using custom hook
  const [pokemon, setPokemon] = useAxios(
    "https://pokeapi.co/api/v2/pokemon",
    "results"
  );

  return (
    <div>
      <h1>List</h1>
      {pokemon.map((poke, index) => {
        return <Poke key={index} poke={poke} />;
        // <h2 key={index}>{poke.name}</h2>;
      })}
    </div>
  );
};
export default List;
