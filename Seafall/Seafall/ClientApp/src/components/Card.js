import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            advisor: this.props.advisor
            //{ name: "", epithet: "", ability: "", bonus1: "", bonus2: "", bonus3: "", repCost: 0, goldCost: 0,guild: "",set: 0,currentOwner: 0,status: "Available" }
        }
    }

    render() {
        let bonusList = [];
        bonusList.push(this.renderBonus(this.state.advisor.bonus1));
        bonusList.push(this.renderBonus(this.state.advisor.bonus2));
        bonusList.push(this.renderBonus(this.state.advisor.bonus3));
        return (
            <div className="card col advisor-card">
                <div className="card-body">
                    <h5 className="card-title name">
                        {this.state.advisor.name}
                    </h5>
                    <h6 className="card-subtitle epithet">
                        {this.state.advisor.epithet}
                    </h6>
                        <p className="card-text">
                            {this.state.advisor.ability}
                        </p>
                        <div className="row align-bottom">
                            <ul className="col-sm-9 list-group bonuses">
                                {bonusList}
                            </ul>
                            <div className="col-sm-3 costs">
                                <div className="rep-cost">{this.state.advisor.repCost}</div>
                                <br/>
                                <div className="gold-cost">{this.state.advisor.goldCost}</div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }

    renderBonus(bonus) {
        if (bonus == "Open") {
            return (<li key={bonus} className="list-group-item">|</li>);
        }
        else if (bonus != "") {
            return (<li key={bonus} className="list-group-item">{bonus}</li>);
        }
        else {
            return ""
        }
    }
}
