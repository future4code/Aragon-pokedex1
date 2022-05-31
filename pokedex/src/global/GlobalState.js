import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/urls"
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {
    const [pokeList, setPokeList] = useState ([]);
    const [pokemon, setPokemon] = useState({});

    const getPokeList = () => {
        axios.get(`${BASE_URL}/list?limit=20&offset=0`)
            .then((res) => {
                setPokeList(res.data);
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    const getPokeDetails = (pokename) => {
        axios.get(`${BASE_URL}/${pokename}`)
            .then((res) => setPokemon(res.data))
            .catch((err) => alert(err.response.data));
    }

    const states = {pokeList, pokemon};
    const setters = {setPokeList, setPokemon};
    const getters = {getPokeList, getPokeDetails}

    return(
    <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
    )
};

export default GlobalState