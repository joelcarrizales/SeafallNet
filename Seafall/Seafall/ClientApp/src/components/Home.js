import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { game: { "asdf": 2}, loading: true };
    }
    componentDidMount() {
        this.populateGameData();
    }

  render(game) {
    return (
      <div>
            <h1>Hello, world!</h1>
            { game }
      </div>
    );
    }

    async populateGameData() {
        const response = await fetch('game');
        const data = await response.json();
        this.setState({ game: data, loading: false });
    }
}
