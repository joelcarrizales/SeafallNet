import React, { Component } from 'react';
import './Card.css'

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            advisor: this.props.advisor
        }
    }

    render() {
        let bonusList = [];
        bonusList.push(this.renderBonus(this.state.advisor.bonus1, "b1"));
        bonusList.push(this.renderBonus(this.state.advisor.bonus2, "b2"));
        bonusList.push(this.renderBonus(this.state.advisor.bonus3, "b3"));
        const gloryClass = this.state.advisor.glory === 1 ? "glory" : "";
        let advisorClass = "card col advisor-card";
        advisorClass += this.state.advisor.repCost === -1 ? " patmos" : "";
        advisorClass += this.state.advisor.repCost === -2 ? " society" : "";
        return (
            <div className={advisorClass}>
                <div className="card-body">
                    <h5 className="card-title name">
                        {this.state.advisor.name === "" ? "|" : this.state.advisor.name}
                    </h5>
                    <h6 className="card-subtitle epithet">
                        {"The " + this.state.advisor.epithet}
                        <div className={gloryClass}></div>
                    </h6>
                    <p className="card-text">
                        {this.state.advisor.ability}
                        {this.state.advisor.rank > 0 &&
                            <span>{this.state.advisor.rank}</span>
                        }
                    </p>
                    <div className="row align-bottom">
                        <ul className="col-sm-9 list-group bonuses">
                            {bonusList}
                        </ul>
                        <div className="col-sm-3 costs">
                            {this.state.advisor.repCost > 0 &&
                                <div className="rep-cost">{this.state.advisor.repCost}</div>
                            }
                            {this.state.advisor.repCost === -1 &&
                                <div className={"ker"}></div>
                            }
                            {this.state.advisor.repCost === -2 &&
                                <div className={"society"}></div>
                            }
                            <div className="gold-cost">{this.state.advisor.goldCost}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderBonus(bonus, key) {
        if (bonus === "Open") {
            return (<li key={key} className="list-group-item">|</li>);
        }
        else if (bonus !== "") {
            return (<li key={key} className="list-group-item">{bonus}</li>);
        }
        else {
            return ""
        }
    }
}
