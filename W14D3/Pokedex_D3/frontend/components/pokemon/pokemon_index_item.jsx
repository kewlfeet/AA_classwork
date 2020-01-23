import React from 'react';
import { Link } from 'react-router-dom';
import PokemonDetail from './pokemon_detail';

export default class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // debugger
    }

    handleClick(e) {
        debugger;
        return (
            <div>
                <PokemonDetail key={this.props.pokemon.id} pokemon={this.props.pokemon}/>

            </div>
        )
    }

    render() {
        // debugger;
        return (
            <Link to={`/pokemon/${this.props.pokemon.id}`} onClick={e=> this.handleClick(e)}>
                <li>
                    {this.props.pokemon.name}
                    {/* {this.props.pokemon.image_url} */}
                    <img src={this.props.pokemon.image_url}></img>
                </li>
            </Link>
        )
    }
}
