import React, { Component } from 'react';

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            advisor: this.props.advisor
            //{ name: "", epithet: "", ability: "", bonus1: "", bonus2: "", bonus3: "", repCost: 0, goldCost: 0,guild: "",set: 0,currentOwner: 0,status: "Available" }
        }
    }

    render() {
        return (
            <div className="card">
                <div className="name">
                    {this.state.advisor.name}
                </div>
                <div className="epithet">
                    {this.state.advisor.epithet}
                </div>
                <p>
                    {this.state.advisor.ability}
                </p>
                <div className="bonuses">
                    <span>
                        {this.state.advisor.bonus1}
                    </span>
                    <br />
                    <span>
                        {this.state.advisor.bonus2}
                    </span>
                    <br />
                    <span>
                        {this.state.advisor.bonus3}
                    </span>
                </div>
                <div className="costs">
                    {this.state.advisor.repCost}
                    <br/>
                    {this.state.advisor.goldCost}
                </div>
            </div>
        );
    }
}
