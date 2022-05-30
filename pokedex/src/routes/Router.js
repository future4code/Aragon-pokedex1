import PokeListPage from "../pages/PokeListPage";
import PokeDetailsPage from "../pages/PokeDetailsPage";
import PokedexPage from "../pages/PokedexPage";
import ErrorPage from "../pages/ErrorPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {  

    return( 

        <BrowserRouter>
        <Routes>
          <Route index element={<PokeListPage />} />
          <Route path={"/pokedex"} element={<PokedexPage />}
          />
          <Route path={"/pokemon/:pokeName/details"} element={<PokeDetailsPage />} />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    ); 

}; 