import React, { Component } from "react";
import { Mutation } from "react-apollo";

import Mutations from "../../graphql/mutations";
const { NEW_EMBLEM } = Mutations;

class EmblemCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "" }
    }

    handleSubmit(e, newEmblem) {
        e.preventDefault();
        debugger;
        let name = this.state.name;
    
        // our newEmblem function will accept an object with the key of "variables" pointing to an object with all our passed in variables.
        newEmblem({
          variables: {
            name: name,
          }
        })
        // after our mutation has run we want to reset our state and show our user the success message
        .then(data => {
          console.log(data);
          this.setState({
            message: `New emblem "${name}" created successfully`,
            name: "",
          });
        })
    }

    update() {
        return e => {
            this.setState({ name: e.target.value})
        }
    }

    updateCache(cache, { data: { newEmblem } }) {
        let emblems;
        try {
            // we'll try to read from our cache but if the query isn't in there no sweat!
            // We only want to update the data if it's in the cache already - totally fine if the data will
            // be fetched fresh later
            emblems = cache.readQuery({ query: FETCH_EMBLEMS });
        } catch (err) {
            return;
        }

        // then our writeQuery will only run IF the cache already has data in it
        if (emblems) {
            let emblemArray = emblems.emblems;

            cache.writeQuery({
                query: FETCH_EMBLEMS,
                data: { emblems: emblemArray.concat(newEmblem) }
            });
        }
    }



    render() {
        return (
            <Mutation
                mutation={NEW_EMBLEM}
                update={(cache, data) => this.updateCache(cache, data)}
            >
                {(newEmblem, { data }) => (
                    <div>
                        <form onSubmit={e => this.handleSubmit(e, newEmblem)}>
                            <input
                                onChange={this.update()}
                                value={this.state.name}
                                placeholder="Name"
                            />
                            <button type="submit">Create Emblem</button>
                        </form>
                    </div>
                    )
                }
            </Mutation>
    )}
}

export default EmblemCreate;

