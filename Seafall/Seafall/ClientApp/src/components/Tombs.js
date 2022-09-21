import React, { Component } from 'react';
import tombs from '../images/TombsSecret.png'

export class Tombs extends Component {

    render() {
        return (
            <div className="tombs">
                <img src={tombs} style={{width: '100%'}} alt="TombsSecret.png" />
                <h4>Notes</h4>
                <p>
                    Unagi forever!
                </p>
            </div>
        );
    }
}