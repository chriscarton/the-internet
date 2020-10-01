import React, { Component } from "react";
class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
    this.getJokes();
  }

  getJokes() {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(res => res.json())
      .then(data => this.setState({ jokes: data }));
  }

  render() {
    return (
      <div id="Jokes">
        <h1>Jokes</h1>
        <div className="jokes">
          {this.state.jokes.map(joke => (
            <div key={joke.id}>
              <div className="single-joke" key={joke.id}>
                <div className="joke-setup">{joke.setup}</div>
                <div className="joke-punchline">{joke.punchline}</div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Jokes;
