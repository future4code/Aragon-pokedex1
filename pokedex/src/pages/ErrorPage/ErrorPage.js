import { useNavigate } from "react-router-dom";
import { goToPokeListPage } from "../../routes/coordinator";

export default function ErrorPage() {
    const navigate = useNavigate();

    return(
     <section>
         <h1>Error 401 - Página não encontrada!</h1>
         <button onClick={() => goToPokeListPage(navigate)}>Ir para Lista de Pokemons</button>
     </section>
    );
}; 