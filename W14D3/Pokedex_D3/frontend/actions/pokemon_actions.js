import * as apiUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_ONE_POKEMON = 'RECEIVE_ONE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

// export const fetchAllPokemon = () => dispatch => {
//   apiUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)));
// };

export const requestAllPokemon = () => (dispatch) => (
  apiUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_ONE_POKEMON,
  pokemon
})

export const requestSinglePokemon = () => (dispatch) => (
  apiUtil.fetchSinglePokemon().then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
)
