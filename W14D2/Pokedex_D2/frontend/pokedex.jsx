import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';
import configureStore from "./store/store";
// import {fetchAllPokemon} from './actions/pokemon_actions'
import {selectAllPokemon} from './reducers/selectors'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon =selectAllPokemon;