import React from 'react'

export default class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
        debugger;

        this.render = this.render.bind(this);
    }

    componentDidMount() {
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }

    render() {

        return (
            <div>
                <h2> {this.props.pokemon.name} </h2>
                <img src={this.props.pokemon.image_url}></img>
                <h3>ID: {this.props.pokemon.id}</h3>
                <h3>Attack: {this.props.pokemon.attack}</h3>
                <h3>Defense: {this.props.pokemon.defense}</h3>
                <h3>Type: {this.props.pokemon.poke_type}</h3>
                <h3>Moves: {this.props.pokemon.moves}</h3>
                
            </div>
        );
    }
}