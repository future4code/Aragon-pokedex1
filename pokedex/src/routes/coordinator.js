export const goToPokeListPage = (navigate) => {
    navigate("/")
};

export const goToDetailsPage = (navigate, pokeName) => {
    navigate(`/pokemon/${pokeName}/details`)
}

export const goToPokedexPage = (navigate) => {
    navigate ("/pokedex")
};

export const goToPreviousPage = (navigate) => {
navigate(-1)
};