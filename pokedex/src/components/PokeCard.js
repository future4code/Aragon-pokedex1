import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../routes/coordinator";

export default function PokeCard(props) {
    const navigate = useNavigate();
    const { id, name } = props.pokemon;

    return (
        <section>
            <span>{name.toUpperCase()} - </span>
            <span>Nº: {id}</span>
            <br />
            <button>Adicionar a Pokedex</button>
            <button onClick={() => goToDetailsPage(navigate, name)}>Ver detalhes</button>
            <hr />
        </section>
    );
}