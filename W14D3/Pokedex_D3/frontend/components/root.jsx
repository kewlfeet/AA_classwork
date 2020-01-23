import React from 'react'
import {Provider} from 'react-redux'
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import { HashRouter, Route, Switch } from "react-router-dom";
import PokemonDetail from './pokemon/pokemon_detail';


const Root = ({store}) => (
    <Provider store={store}>
        <HashRouter>
            <h1>Pokedex</h1>
            <Switch>
                <Route path="/pokemon/:pokemonId" component={PokemonDetail} />
                <Route path="/" component={PokemonIndexContainer} />
            </Switch>
        </HashRouter>
    </Provider>
);
            // <div>
            //     <PokemonIndexContainer />
            // </div>

export default Root;