import React from "react";
import { Mutation } from "react-apollo";
// we added the "react-icons" library to have access to a pencil icon for editting
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import Mutations from "../../graphql/mutations";

const { ADD_GOD_DOMAIN, REMOVE_GOD_DOMAIN } = Mutations;

class DomainsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            domain: ""
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

        addGodDomain({
            variables: { id: this.props.id, domain: this.state.domain }
        }).then(data => {
            this.setState({domain: ""});
        }).catch(error => console.log(error))
    }

    render() {
        const domains = this.props.domains.map((domain, i) => {
            return <li key={i}>
                {domain}
                <Mutation mutation={REMOVE_GOD_DOMAIN}>
                    {(removeGodDomain, { data }) => (
                         <button
                            onClick={e => {
                                e.preventDefault();
                                removeGodDomain({ variables: { id: this.props.id, domain: domain }})
                            }}>
                            Delete
                        </button>
                    )}
                </Mutation>
            </li>
        })

        return (
            <div>
                <h2>Domains</h2>
                <ul>
                    {domains}
                </ul>
                <Mutation mutation={ADD_GOD_DOMAIN}>
                    {(addGodDomain, { data }) => (
                        <form onSubmit={e => this.handleSubmit(e, addGodDomain)}>
                            <input type="text"
                                placeholder="Add domain"
                                value={this.state.domain}
                                onChange={this.updateField("domain")} />
                            <button>Add Domain</button>
                        </form>
                    )}
                </Mutation>
               
            </div>
        )
    }
}

export default DomainsDetail;