import React from "react";
import { Mutation, Query } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";

import Queries from "../../graphql/queries"
import Mutations from "../../graphql/mutations";
const { ADD_GOD_RELATIVE, REMOVE_GOD_RELATIVE } = Mutations;
const { FETCH_GODS } = Queries;

class RelativeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children,
            parents: this.props.parents,
            siblings: this.props.siblings
        }

        this.updateField = this.updateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field) {
        return e => {
            e.preventDefault();
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e, addGodDomain) {
        e.preventDefault();
        // addGodDomain({
        //     variables: { id: this.props.id, domain: this.state.domain }
        // }).then(data => {
        //     this.setState({domain: ""});
        // }).catch(error => console.log(error))
    }

    render() {
        const domains = this.props.domains.map((domain, i) => {
            return <li key={i}>
                {domain}
                <Mutation mutation={REMOVE_GOD_RELATIVE}>
                    {/* {(removeGodRelative, { data }) => (
                         <button
                            onClick={e => {
                                e.preventDefault();
                                removeGodDomain({ variables: { id: this.props.id, domain: domain }})
                            }}>
                            Delete
                        </button>
                    )} */}
                </Mutation>
            </li>
        })

        return (
            <div>
                <h2>Parents</h2>
                <ul>
                    {}
                </ul>
                <h2>Children</h2>
                <ul>
                    {}
                </ul>
                <h2>Siblings</h2>
                <ul>
                    {}
                </ul>

                <Mutation mutation={ADD_GOD_RELATIVE}>
                    {/* {(addGodRelative, { data }) => (
                        <form onSubmit={e => this.handleSubmit(e, addGodDomain)}>
                            <input type="text"
                                placeholder="Add domain"
                                value={this.state.domain}
                                onChange={this.updateField("domain")} />
                            <button>Add Domain</button>
                        </form>
                    )} */}
                </Mutation>
               
            </div>
        )
    }
}
export default RelativeDetail;