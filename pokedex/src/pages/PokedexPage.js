import { useContext } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import styled from "styled-components";

const StyledListPokedex = styled.div`
text-align: center;
border: 5px solid  #FECB05;
background-color: #c9cdde;
padding-bottom: 15px;
font-family: Arial, Helvetica, sans-serif;
color: #1F356B;

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
`

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

    return(
     <section>
         <Header actualPage={"pokedex"} />
         <h1>Lista Pokedex</h1>
        <StyledListPokedex>{showPokedex}</StyledListPokedex> 
     </section>
    ); 
}; 