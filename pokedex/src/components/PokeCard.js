import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../routes/coordinator";

export default function PokeCard(props) {

    const navigate = useNavigate();

    const { id, name } = props.pokemon;

    return (
        <section>
            <b>{name.toUpperCase()} - </b>
            <b>Nº: {id}</b>
            <br />
            <button>Adicionar a Pokedex</button>
            <button onClick={() => goToDetailsPage(navigate, name)}>Ver detalhes</button>
            <hr />
        </section>
    );
}