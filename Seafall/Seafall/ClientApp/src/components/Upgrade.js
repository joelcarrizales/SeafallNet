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
        const classes = "upgrade " + this.state.upgrade.type + (this.state.upgrade.quantity == 0 ? " empty" : "");
        const muchText = this.state.upgrade.ability.length > 50 ? "font-small" : "";
        const btnClasses = "btn btn-sm btn-outline-" + (this.state.upgrade.type === "iron" ? "light" : "secondary");

        return (
            <div className={classes}>
                <h5>{this.state.upgrade.name}</h5>
                <p className={muchText}>{this.state.upgrade.ability}</p>
                <div className="quantity">
                    x{this.state.upgrade.quantity}
                    <button className={btnClasses} onClick={() => this.props.action(this.state.upgrade.name, this.state.upgrade.quantity-1)}>-</button>
                    <button className={btnClasses} onClick={() => this.props.action(this.state.upgrade.name, this.state.upgrade.quantity+1)}>+</button>
                </div>
                <div className="gold-cost">{this.state.upgrade.goldCost}</div>
               {/* <div class="wrap">{this.state.upgrade.ability}
                    
                </div>*/}
            </div>
        );
    }
}
