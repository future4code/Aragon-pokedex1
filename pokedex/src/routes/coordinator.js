

export const goToPokedexPage = (navigate) => {
    navigate ("/pokedex")
};

export const goToPokeListPage = (navigate) => {
    navigate("/")
};

export const goToPreviousPage = (navigate) => {
navigate(-1)
};

export const goToDetailsPage = (navigate, pokeName) => {
    navigate(`/pokemon/${pokeName}/details`)
}

