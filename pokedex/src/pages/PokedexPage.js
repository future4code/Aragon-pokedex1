import { useContext } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";

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
         {showPokedex}
     </section>
    ); 
}; 