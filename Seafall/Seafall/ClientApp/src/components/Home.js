import React, { Component } from 'react';
import Forum from './Forum';
import Upgrade from './Upgrade';
import Building from './Building';
import Player from './Player';
import './Home.css';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            game: { advisors: [] }, loading: true, searchText: "", filteredAdvisors: [], drawButtonClass: "btn btn-outline-light col", playerDisplay: [false, true, true, true, true, true]
        };
    }
    componentDidMount() {
        this.populateGameData();
    }

    findAdvisor = (event) => {
        this.setState({ searchText: event.target.value.toLowerCase() },
            () => {
                let tmp = this.state.game.advisors.filter(adv => adv.epithet.toLowerCase().includes(this.state.searchText) || adv.name.toLowerCase().includes(this.state.searchText));
                let tmpClass = "btn col ";
                tmpClass += tmp.length == 1 ? "btn-outline-primary" : "btn btn-outline-light";
                this.setState({ filteredAdvisors: tmp, drawButtonClass: tmpClass });
            }
        );
    }

    drawClick = () => { // assumes only 1 advisor that matches search text
        let index = this.state.game.advisors.findIndex(adv => adv.epithet.toLowerCase().includes(this.state.searchText) || adv.name.toLowerCase().includes(this.state.searchText));
        let tmpGame = this.state.game;
        tmpGame.advisors[index].status = "Available"
        this.setState({ game: tmpGame });
    }

    hireAdvisor = (event) => { // assumes only 1 advisor that matches search text
        let index = this.state.game.advisors.findIndex(adv => adv.epithet.toLowerCase().includes(this.state.searchText) || adv.name.toLowerCase().includes(this.state.searchText));
        let tmpGame = this.state.game;
        tmpGame.advisors[index].currentOwner = parseInt(event.target.value);
        tmpGame.advisors[index].status = event.target.value == 0 ? "Hidden" : "Ready";
        this.setState({ game: tmpGame }, () => event.target.value = "");
    }

    editUpgrade = (name, quantity) => {
        let index = this.state.game.upgrades.findIndex(up => up.name === name);
        let tmpGame = this.state.game;
        tmpGame.upgrades[index].quantity = quantity;
        this.setState({ game: tmpGame });
    }

    editBuilding = (name, quantity) => {
        let index = this.state.game.buildings.findIndex(bu => bu.name === name);
        let tmpGame = this.state.game;
        tmpGame.buildings[index].quantity = quantity;
        this.setState({ game: tmpGame });
    }

    displayClick = (id) => {
        let tmp = this.state.playerDisplay;
        tmp[id] = !tmp[id];
        this.setState({ playerDisplay: tmp })
    }

    updateGold = (id, gold) => {
        if (typeof parseInt(gold) === "number") {
            const index = this.state.game.players.findIndex(pl => pl.id === id);
            let tmpGame = this.state.game;
            tmpGame.players[index].gold = gold;
            this.setState({ game: tmpGame });
        }
    }

    render() {
        let contents = this.state.loading && this.state.game != undefined && this.state.game.advisors != undefined
            ? <p><em>Loading...</em></p>
            : <div></div>
        return (
            <div className="container">
                <h1>Welcome to Seafall!</h1>
                {this.state.loading || this.state.game.advisors === undefined || this.state.game.advisors.length === 0
                    ? <input type="file" id="gameFile" className={this.state.fileHideClass} onChange={this.handleFileChange} />
                    : <>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    {this.state.game.upgrades.filter(up => up.type === "wood").map(up => <Upgrade key={up.name} upgrade={up} action={this.editUpgrade} />)}
                                </td>
                                <td>
                                    {this.state.game.upgrades.filter(up => up.type === "linen").map(up => <Upgrade key={up.name} upgrade={up} action={this.editUpgrade} />)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.game.buildings.filter(bu => bu.type === "wood").map(bu => <Building key={bu.name} building={bu} action={this.editBuilding} />)}
                                </td>
                                <td>
                                    {this.state.game.buildings.filter(bu => bu.type === "linen").map(bu => <Building key={bu.name} building={bu} action={this.editBuilding} />)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.game.upgrades.filter(up => up.type === "spice").map(up => <Upgrade key={up.name} upgrade={up} action={this.editUpgrade} />)}
                                </td>
                                <td>
                                    {this.state.game.upgrades.filter(up => up.type === "iron").map(up => <Upgrade key={up.name} upgrade={up} action={this.editUpgrade} />)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {this.state.game.buildings.filter(bu => bu.type === "spice").map(bu => <Building key={bu.name} building={bu} action={this.editBuilding} />)}
                                </td>
                                 <td>
                                    {this.state.game.buildings.filter(bu => bu.type === "iron").map(bu => <Building key={bu.name} building={bu} action={this.editBuilding} />)}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="row">
                            <button className="btn btn-outline-success col" onClick={this.updateServer}>Upload State</button>
                            {this.state.searchText === "admin" &&
                                <button className="btn btn-outline-danger col" onClick={this.reset}>Reset State</button>
                            }
                        </div>
                        <div className="row">
                            <input type="text" id="advisorToDraw" name="advisorToDraw" className="col" onChange={this.findAdvisor} />
                            <button className={this.state.drawButtonClass} onClick={this.drawClick}>Draw Advisor</button>
                            <select className="form-select col" aria-label="Owner" onChange={this.hireAdvisor}>
                                <option>Choose an Option</option>
                                <option value="0">Forum</option>
                                <option value="1">Joey</option>
                                <option value="2">Hannah</option>
                                <option value="3">Zach</option>
                                <option value="4">Bo</option>
                                <option value="5">Pete</option>
                            </select>
                            
                        </div>
                        <Forum advisors={this.state.game.advisors} />
                        <div className="row">
                            {this.state.game.players.map(pl =>
                                <button key={pl.id} className="btn btn-primary col" onClick={() => this.displayClick(pl.id)}>{(this.state.playerDisplay[pl.id] ? "Hide " : "Show ") + pl.name}</button>
                            )}
                        </div>
                        {this.state.game.players.filter(pl => this.state.playerDisplay[pl.id]).map(pl => (
                            <Player key={pl.id}
                                player={pl}
                                advisors={this.state.game.advisors.filter(adv => adv.currentOwner === pl.id)}
                                action={this.updateGold} />
                            ))
                        }
                    </>
                }
                <div className="footer">Version 2.4.4</div>
            </div>
        );
    }

    async populateGameData() {
        const response = await fetch('game');
        const data = await response.json();
        if (data.Game !== undefined) {
            this.setState({ game: data.Game, loading: false });
        }
    }

    handleFileChange = event => {
        let input = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (event) => {
            let fileContent = event.target.result;
            if (fileContent.includes("advisors")) {
                this.setState({ game: JSON.parse(fileContent), loading: false });
            }
        };
        reader.readAsText(input);
    };

    updateServer = async() => {
        const response = await fetch(`game`, {
            method: 'POST',
            body: JSON.stringify({
                Game: this.state.game
            }),
            headers: {
                'Content-type': 'text/html; charset=UTF - 8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle data
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    reset = () => {
        this.setState({ loading: true });
    }
}
