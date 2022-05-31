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

span{
    font-style: bold; 
}
button{
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

`
export default function PokeListPage() {
    const { states, getters } = useContext(GlobalStateContext)  
    const { pokeList } = states
    const { getPokeList } = getters;  

    useEffect(() => {
        getPokeList();
    }, [])

    const showPokeList = pokeList[0] ? pokeList.map((pokemon) => {
        return  (
            <PokeCard
            key={pokemon.id}
            pokemon={pokemon}
            />
        );
    }) : <h2>Carregando...</h2>

    return (

        <div>
            <Header actualPage={"pokelist"} />
            <main>
            
            <StyledList>
            <h1>Lista de Pokemons</h1>
                {showPokeList}
            </StyledList>
            </main>
        </div>

    );

}; 