import React, { Component } from 'react';
import Forum from './Forum'

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            game: { advisors: [] }, loading: true, searchText: "", filteredAdvisors: [], drawButtonClass: "btn btn-outline-light col"
        };
    }
    componentDidMount() {
        this.populateGameData();
    }

    findAdvisor = (event) => {
        let tmp = [];
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
        this.setState({ game: tmpGame });
    }

    render() {
        let contents = this.state.loading && this.state.game != undefined && this.state.game.advisors != undefined
            ? <p><em>Loading...</em></p>
            : <div></div>
        return (
            <div className="container">
                <h1>Welcome to Seafall!</h1>
                {this.state.loading || this.state.game.advisors == undefined || this.state.game.advisors.length == 0
                    ? <input type="file" id="gameFile" className={this.state.fileHideClass} onChange={this.handleFileChange} />
                    : <>
                        {this.state.searchText == "admin" &&
                        <div className="row">
                            <button className="btn btn-outline-success col" onClick={this.updateServer}>Upload State</button>
                            <button className="btn btn-outline-danger col" onClick={this.reset}>Reset State</button>
                        </div>
                        }
                        <div className="row">
                            <input type="text" id="advisorToDraw" name="advisorToDraw" className="col" onChange={this.findAdvisor} />
                            <button className={this.state.drawButtonClass} onClick={this.drawClick}>Draw Advisor</button>
                            <select className="form-select col" aria-label="Owner" onChange={this.hireAdvisor}>
                                <option value="0">Forum</option>
                                <option value="1">Joey</option>
                                <option value="2">Hannah</option>
                                <option value="3">Zach</option>
                                <option value="4">Pete</option>
                            </select>
                            
                        </div>
                        <Forum advisors={this.state.game.advisors} />
                </>}
            </div>
        );
    }

    async populateGameData() {
        const response = await fetch('game');
        const data = await response.json();
        this.setState({ game: data.Game, loading: false });
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
