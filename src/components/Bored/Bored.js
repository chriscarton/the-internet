import React, { Component } from "react";

export default class Bored extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: []
    };
  }

  componentWillMount() {
    this.doQuery();
  }

  reload = () => {
    this.doQuery();
  };

  doQuery() {
    fetch("http://www.boredapi.com/api/activity/")
      .then(res => res.json())
      .then(data => this.setState({ activity: data }));
  }

  render() {
    let activity = this.state.activity;
    return (
      <div id="Bored" className="module">
        <h1 className="title">Bored ?</h1>
        <p>Here a thing to do :</p>
        <div className="thing-to-do">
          <p className="lead">{activity.activity}</p>
          <br />

          <ul>
            <li>
              <u>Type</u> : {activity.type}
            </li>
            <li>
              <u>Accessibility</u> : {activity.accessibility}
            </li>
            <li>
              <u>Participants</u> : {activity.participants}
            </li>
            <li>
              <u>Price</u> : {activity.price}
            </li>
          </ul>
          <div className="text-center">
            <button className="btn btn-primary" onClick={this.reload}>
              <i className="fa fa-refresh"></i> Try something else
            </button>
          </div>
        </div>
      </div>
    );
  }
}
