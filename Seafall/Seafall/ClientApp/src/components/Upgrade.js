import React, { Component } from 'react';
import './Upgrade.css'

export default class Upgrade extends Component {

    constructor(props) {
        super(props);
        this.state = {
            upgrade: this.props.upgrade
        }
    }

    render() {
        const classes = "upgrade " + this.state.upgrade.type
        const muchText = this.state.upgrade.ability.length > 50 ? "font-small" : "";

        return (
            <div className={classes}>
                <h5>{this.state.upgrade.name}</h5>
                <p className={muchText}>{this.state.upgrade.ability}</p>
                <div className="gold-cost">{this.state.upgrade.goldCost}</div>
               {/* <div class="wrap">{this.state.upgrade.ability}
                    
                </div>*/}
            </div>
        );
    }
}
