import React from "react";
import { Mutation, Query } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";

import Queries from "../../graphql/queries"
import Mutations from "../../graphql/mutations";
const { FETCH_ABODES, FETCH_ABODE } = Queries;
const { UPDATE_GOD_ABODE } = Mutations;

class AbodeDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            abodeId: this.props.abode.id || "",
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        this.setState({ editing: true });
    }

    abodeUpdate() {
        return e => {
            this.setState({ abodeId: e.target.value });
        }
    }

    renderOptions(abodes) {
        return abodes.map(abode => {
            return (
                <option key={abode.id} value={abode.id}>{abode.name}</option>
            )
        })
    }

    render() {
        if (this.state.editing) {
            return (                   
                    <Mutation mutation={ UPDATE_GOD_ABODE }>
                        {(updateGodAbode, data) => (
                        <div>
                            <form onSubmit={e => {
                                e.preventDefault();
                                updateGodAbode({
                                    variables: { godId: this.props.godId, abodeId: this.state.abodeId }
                                }).then(() => this.setState({editing: false}))
                                }}>
                                <Query query={FETCH_ABODES}>
                                    {(abodeData) => {
                                        if (abodeData.loading) return <p>Loading...</p>;
                                        if (abodeData.error) return <p>Error</p>;
                                        return <div className= "fetchAllAbodes">
                                            <select defaultValue={this.props.abode.id}
                                                onChange={this.abodeUpdate()}>
                                                {this.renderOptions(abodeData.data.abodes)}
                                            </select>
                                            <button>Update Abode</button>
                                        </div>
                                    }}
                                </Query>       
                            </form>
                        </div> 
                        )}
                    </Mutation>
            );
        } else {
            return (
                <div>
                    <div
                        onClick={this.handleEdit}
                        style={{ fontSize: "10px", cursor: "pointer", display: "inline" }}
                    >
                        <IconContext.Provider value={{ className: "custom-icon" }}>
                            <FaPencilAlt />
                        </IconContext.Provider>
                    </div>
                    <h2> {this.props.abode.name} </h2>
                </div>
            );
        }
    }
}

export default AbodeDetail;