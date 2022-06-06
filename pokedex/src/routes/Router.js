import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokeListPage from "../pages/PokeListPage/PokeListPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokeDetailsPage from '../pages/PokeDetailsPage/PokeDetailsPage';
import ErrorPage from "../pages/ErrorPage/ErrorPage"

export default function Router() {  

    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<PokeListPage/>} />
          <Route path={"/pokedex"} element={<PokedexPage />} />
          <Route path={"/pokemon/:pokeName/details"} element={<PokeDetailsPage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
}; 