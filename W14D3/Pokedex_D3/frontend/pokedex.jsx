import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root'
import { HashRouter, Route } from "react-router-dom";

// import {receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
// import {fetchAllPokemon} from './util/api_util';
// import {fetchAllPokemon} from './actions/pokemon_actions'
// import {selectAllPokemon} from './reducers/selectors'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, rootEl);
});

// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon =selectAllPokemon;