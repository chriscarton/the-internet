import React, { Component } from "react";

class RandomCat extends Component {
  constructor(props) {
    super(props);
    this.state = { cats: [] };
  }

  //ça ça va être déprécié...
  componentWillMount() {
    this.oneLove();
  }

  reloadCat = () => {
    this.oneLove();
  };

  oneLove = () => {
    // fetch("https://api.thecatapi.com/v1/images/search")
    //   .then(res => res.json())
    //   .then(data => this.setState({ cats: data }));
  };

  render() {
    //Et là, manifestement j'ai encore des problèmes
    //console.log(this.state);

    return (
      <div id="catGenerator">
        <h1>Random Cat Generator</h1>
        <div className="cat">
          {this.state.cats.map(cat => (
            <img key={cat.url} src={cat.url} alt="Un chat random" />
          ))}
        </div>
        <div className="m-1">
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={this.reloadCat}
          >
            <i className="fa fa-refresh"></i> reload
          </button>
        </div>
      </div>
    );
  }
}
export default RandomCat;
