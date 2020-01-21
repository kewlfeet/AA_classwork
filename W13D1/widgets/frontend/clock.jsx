import React from 'react';
class Clock extends React.Component{
    constructor() {
        this.time = new Date();

        this.render;
    }

    render() {
        return <h1>{ this.toString() }</h1>
    }

    tick() {
        this.setState(time = new Date)
    }




}

export default Clock;