import React, { Component } from "react";

import { hair } from "./hair";

class Coiffure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proposition: ""
    };
  }

  componentWillMount() {
    this.generateProposition();
  }

  generateProposition() {
    let number = Math.floor(Math.random() * hair.length);
    let expression = hair[number];

    this.setState({ proposition: expression + "hair" });
  }

  render() {
    let proposition = this.state.proposition;
    return (
      <div id="Coiffure" className="module">
        <h1>Nom pour un salon de coiffure</h1>
        <div className="proposition">{proposition}</div>
        <div className="text-center">
          <button className="btn btn-primary btn-sm m-1">TIF</button>
          <button className="btn btn-primary btn-sm m-1">HAIR</button>
        </div>
      </div>
    );
  }
}
export default Coiffure;
