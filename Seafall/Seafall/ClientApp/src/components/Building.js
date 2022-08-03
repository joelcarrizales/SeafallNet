import React, { Component } from 'react';
import './Building.css'

export default class Buliding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            building: this.props.building
        }
    }

    render() {
        const classes = "building " + this.state.building.type + (this.state.building.quantity == 0 ? " empty" : "");
        let muchText = "";
        if (this.state.building.ability.length > 50) {
            muchText = "font-small";
        }
        if (this.state.building.ability.length > 80) {
            muchText = "font-tiny";
        }
        const btnClasses = "btn btn-sm btn-outline-" + (this.state.building.type === "iron" ? "light" : "secondary");

        return (
            <div className={classes}>
                <div className="top">
                    <h5>{this.state.building.name}</h5>
                </div>
                <div className="bottom">
                    <div className="left col">
                        <p className={muchText}>{this.state.building.ability}</p>
                        <div className="quantity">
                            x{this.state.building.quantity}
                            <button className={btnClasses} onClick={() => this.props.action(this.state.building.name, this.state.building.quantity - 1)}>-</button>
                            <button className={btnClasses} onClick={() => this.props.action(this.state.building.name, this.state.building.quantity + 1)}>+</button>
                        </div>
                    </div>
                    <div class="right col">
                        <div className="gold-cost">{this.state.building.goldCost}</div>
                    </div>
                </div>
            </div>
        );
    }
}
