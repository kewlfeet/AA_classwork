import React from "react";
import { Mutation, Query } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";

import Queries from "../../graphql/queries"
import Mutations from "../../graphql/mutations";
const { FETCH_EMBLEMS } = Queries;
const { ADD_GOD_EMBLEM, REMOVE_GOD_EMBLEM } = Mutations;

class EmblemsDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
        }
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(e) {
        e.preventDefault();
        this.setState({ editing: true });
    }



    renderOptions(abodes) {
        return abodes.map(abode => {
            return (
                <option key={abode.id} value={abode.id}>{abode.name}</option>
            )
        })
    }

    render() {
        const emblems = this.props.emblems.map(emblem => {
            <li key={emblem.id}>
                {emblem.name}
            </li>
        })
        if (this.state.editing) {
            return (
              <div>
                  <ul>
                      
                  </ul>
              </div>  
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
                    <h2>Emblems</h2>
                    <ul>
                        {this.props.emblems.map(emblem => <li key={emblem.id}>{emblem.name}</li> )}
                    </ul>
                </div>
            );
        }
    }
}

export default EmblemsDetail;