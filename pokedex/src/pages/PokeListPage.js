import { navigate, useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import { goToDetailsPage } from "../routes/coordinator";
import { BASE_URL } from "../constants/urls";

export default function PokeListPage() {
    const [list, setList] = useState ([]);


 

    const getList = () => {
        axios.get(`${BASE_URL}/list?limit=20&offset=0`)
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    useEffect(() => {
        getList();
    }, [])


    const renderList = list.map((pokemon) => {
        return(
            <section key={pokemon.id}>
            <span>{pokemon.name.toUpperCase()} - </span>
            <span>Nº: {pokemon.id}</span>
            <br />
            <button>Adicionar a Pokedex</button>
            <button onClick={() => goToDetailsPage(navigate)}>Ver detalhes</button>
            <hr />
        </section>
            
        )
    })

    return (

        <div>
            <Header actualPage={"pokelist"} />
            <p>Pokelist</p>
                {renderList}
        </div>

    );

}; 