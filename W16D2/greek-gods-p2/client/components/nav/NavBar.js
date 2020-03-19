import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-container">
                <Link to="/">Index</Link>
                <br/>
                <Link to="/new">Create</Link>
            </div>
        )
    }
}

export default NavBar;