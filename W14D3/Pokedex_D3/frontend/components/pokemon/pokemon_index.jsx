import React from 'react'
import PokemonIndexItem from './pokemon_index_item';

export default class PokemonIndex extends React.Component {

    constructor(props) {
        super(props)

        this.render = this.render.bind(this);
        this.eachPokemonRender = this.eachPokemonRender.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.props.requestAllPokemon();
    }

    eachPokemonRender() {
        return this.props.pokemon.map((poke) => {
            return (
                <PokemonIndexItem key={poke.id} pokemon={poke} />
            )
        })
    }

    render() {
        return (
            <ul className='pokemonlist'>
                {this.eachPokemonRender()}
            </ul>
        )
    }
}