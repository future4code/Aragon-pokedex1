import { useContext } from "react";
import Header from "../../components/Header";
import PokeCard from "../../components/PokeCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { StyledListPokedex } from "./styles";

export default function PokedexPage() {
  const { states } = useContext(GlobalStateContext);
  const { pokedex } = states;

  const showPokedex = pokedex.map((pokemon) => {
    return (
      <PokeCard
        key={pokemon.id}
        pokemon={pokemon}
        actualPage={"pokedex"}
      />
    )
  })

  return (
    <main>
      <Header actualPage={"pokedex"} />
      <StyledListPokedex>
        <h1>Lista Pokedex</h1>
        <hr />
        {showPokedex}
      </StyledListPokedex>
    </main>
  );
}; 