import { useNavigate } from "react-router-dom";
import {  goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../routes/coordinator";



export default function Header(props) {  

    const RenderHeader = () => {
        const navigate = useNavigate()

        switch (props.actualPage) {
            case "pokelist": 
            return (
                <div>
                <h1>Pokemons</h1>
                <button onClick={() => goToPokedexPage(navigate)}>Ir Para Pokedex</button>
                </div> 
              )
            case "pokedex":
                return(
                    <div>
                        <h1>Pokedex</h1>
                        <button onClick={() => goToPokeListPage(navigate)}>Ir Para Lista de Pokemons</button>
                    </div>
                )
            case "pokedetails":
                return(
                    <div>
                        <h1>Detalhes</h1>
                        <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
                    </div>
                )
            default: 
            return;
        }
    }

    return( 
        <div>{RenderHeader()}</div>
    ); 

}; 