import React, { Component } from 'react';
import Card from './Card';

export default class Forum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advisors: this.props.advisors
        }
    }

    render() {
        let availableAdvisors = this.state.advisors.filter(a => a.status === "Available").map(a => <Card key={a.epithet} advisor={a} />); 

        return (
            <div className="row">
                {availableAdvisors}
            </div>
            );
    }
}
