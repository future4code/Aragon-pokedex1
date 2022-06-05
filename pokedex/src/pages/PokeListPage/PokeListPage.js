import { useEffect, useContext } from "react";
import Header from "../../components/Header";
import PokeCard from "../../components/PokeCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import { StyledList } from "./styles";

export default function PokeListPage() {
  const { states, getters, setters } = useContext(GlobalStateContext);
  const { pokeList, pokemons, pokedex, page } = states;
  const { setPage } = setters
  const { getPokeList, getAllPokeDetails } = getters;

  useEffect(() => {
    if (!pokeList.length) {
      getPokeList(page);
    } else {
      getAllPokeDetails();
    }
  }, [pokeList])

  const changePage = (sum) => {
    const nextPage = page + sum;

    setPage(nextPage);
    getPokeList(nextPage);
  };

  const showPokeList = pokemons[0] ? pokemons.filter((pokemon) => {
    for (let poke of pokedex) {
      if (poke.id === pokemon.id) {
        return false
      }
    }
    return true
  })
    .map((pokemon) => {
      return (
        <PokeCard
          key={pokemon.id}
          pokemon={pokemon}
          actualPage={"pokelist"}
        />
      );
    }) : <p>Carregando...</p>

  return (
    <section>
      <Header actualPage={"pokelist"} />
      <main>
        <StyledList>
          <h1>Lista de Pokemons</h1>
          <h2>Selecione uma página</h2>
          {page !== 1 &&
            <button onClick={() => changePage(-1)}>Voltar página</button>}
          <span>Página {page}</span>
          {pokeList.length && <button onClick={() =>
            changePage(1)}>Proxima página</button>}
          <hr />
          <div>
            {showPokeList}
          </div>
        </StyledList>
      </main>
    </section>
  );
}; 