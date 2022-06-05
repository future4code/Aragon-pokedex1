import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../routes/coordinator";
import pokedex from "./img/pokedex.png"

const StyledHeader = styled.header`
border: 10px solid black;
margin: 0;
background-color: #f5050d;
padding: 2rem;
text-align: center;


button {
  height: 3rem;
  appearance: button;
  background-color: #3366AF;
  border: solid #1F356B;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FECB05;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 1rem;
  font-weight: 3rem;
  line-height: 1rem;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 1rem 0.5rem 1rem 0.5rem;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;

}
button:after {
  background-clip: padding-box;
  background-color: #3366AF;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

button:main, button:focus {
  user-select: auto;
}

button:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

button:disabled {
  cursor: auto;
}

img {
  width: 50%;
}

.eevee {
  width: 15%;
}

.pikachu {
  width: 10%;
}

.pokedex {
  width: 25%;
}

h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #FECB05;
    font-size: 50px;
}
`

export default function Header(props) {
    const navigate = useNavigate()

    const RenderHeader = () => {
        switch (props.actualPage) {
            case "pokelist":
                return (
                    <section>
                        <img className="pikachu" src="https://c.tenor.com/rbx3ph5SLRUAAAAj/pikachu-pokemon.gif" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" />
                        <img className="eevee" src="https://i.pinimg.com/originals/ce/d6/d8/ced6d8351df9f61eb31032c028cc13a9.gif" />
                        <br />
                        <button onClick={() => goToPokedexPage(navigate)}>Ir Para Pokedex</button>
                    </section>
                );
            case "pokedex":
                return (
                    <section>
                        <img className="pokedex" src={pokedex} />
                        <br />
                        <button onClick={() => goToPokeListPage(navigate)}>Ir Para Lista de Pokemons</button>
                    </section>
                );
            case "pokedetails":
                return (
                    <section>
                        <h1>Detalhes</h1>
                        <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
                    </section>
                );
            default:
                return;
        };
    }

    return (
        <StyledHeader>
            <section>{RenderHeader()}</section>
        </StyledHeader>
    );

}; 