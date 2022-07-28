import React, { Component } from 'react';
import Card from './Card';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { game: { advisors :[] }, loading: true };
    }
    componentDidMount() {
       // this.populateGameData();
    }

    render() {
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : <Card advisor={this.state.game.advisors[0]} />

        return (
            <div>
            <input type="file" id="gameFile" onChange={this.handleFileChange} />
            <h1>Hello, world!</h1>
            { contents }
            </div>
        );
    }

    async populateGameData() {
        const response = await fetch('game');
        const data = await response.json();
        this.setState({ game: data, loading: false });
    }

    handleFileChange = event => {
        let input = event.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (event) => {
            this.setState({ game: JSON.parse(event.target.result), loading: false });
        };
        reader.readAsText(input);
    };
}
