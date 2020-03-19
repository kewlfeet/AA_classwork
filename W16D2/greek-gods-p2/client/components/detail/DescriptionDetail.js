import React from "react";
import { Mutation } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";

import Mutations from "../../graphql/mutations";
const { UPDATE_GOD_DESCRIPTION } = Mutations;

class DescriptionDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            description: this.props.description || ""
        };
      this.handleEdit = this.handleEdit.bind(this);
    }
  
    // this is the function that will trigger "editing" mode
    handleEdit(e) {
      e.preventDefault();
      this.setState({ editing: true });
    }
  
    fieldUpdate(field) {
      return e => this.setState({ [field]: e.target.value });
    }
  
    render() {
      // if we are editing we'll return a Mutation component
      if (this.state.editing) {
        return (
          <Mutation mutation={ UPDATE_GOD_DESCRIPTION }>
            {(updateGodDescription, data) => (
              <div>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    updateGodDescription({
                      variables: { id: this.props.id, description: this.state.description }
                    }).then(() => this.setState({ editing: false }));
                  }}
                > <h2> Description </h2> <br/>
                  <textarea
                    value={this.state.description}
                    onChange={this.fieldUpdate("description")}
                  />
                  <button type="submit">Update Description</button>
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
            <h2> Description </h2> <br/>
            <p>{this.state.description}</p>
          </div>
        );
      }
    }
  }
  
  export default DescriptionDetail;