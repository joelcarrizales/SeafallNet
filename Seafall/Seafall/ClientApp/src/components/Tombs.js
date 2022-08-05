import React, { Component } from 'react';
import './Tombs.css'
import tombs from '../images/Tombs.jpg'

export class Tombs extends Component {

    render() {
        return (
            <div className="tombs">
                <img src={tombs} alt="Tombs.png" />
                <h4>Notes</h4>
                <p>
                    The Unfinished Chamber requires a Raid endeavor. Can use iron for more raid.
                </p>
            </div>
        );
    }
}