import { useEffect, useContext } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import styled from "styled-components";

const StyledList = styled.div`
text-align: center;
border: 5px solid  #FECB05;
background-color: #c9cdde;
padding-bottom: 15px;
font-family: Arial, Helvetica, sans-serif;
color: #1F356B;
margin: 0;
padding: 0%;
box-sizing: border-box;
span {
  font-weight: bold; 
}

button {
  margin: 9px;
  background-color: #13aa52;
  border: 1px solid #13aa52;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:hover {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  button {
    padding: 10px 30px;
  }
}

div{
justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 0px 20px 0px 20px;
  
 
}

@media screen and (min-device-width: 320px) and (max-device-width: 480px){
div{
  grid-template-columns: 1fr;
}
}

`
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