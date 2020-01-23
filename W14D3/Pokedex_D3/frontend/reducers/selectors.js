

export const selectAllPokemon = function(state) {
    const pokemon = [];
    Object.values(state.entities.pokemon).forEach(e_pok => {
        pokemon.push(e_pok);
    })
    return pokemon;
}

export const selectOnePokemon = function(state) {
    return state.entities.pokemon
}
// const initialState = getState();
// selectAllPokemon(initialState); //=> []

// dispatch(requestAllPokemon());

// const populatedState = getState();
// selectAllPokemon(populatedState); //=> array of pokemon objects!