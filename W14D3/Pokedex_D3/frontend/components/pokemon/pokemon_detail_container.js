import { selectOnePokemon } from "../../reducers/selectors";
import { connect } from "react-redux";
import { requestSinglePokemon } from "../../actions/pokemon_actions";
import PokemonDetail from "./pokemon_detail";


const mapStateToProps = state => ({
    pokemon: selectOnePokemon(state)
});

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: dispatch(requestSinglePokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);