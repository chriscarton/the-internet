import React, { Component } from "react";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    console.log("handleChange!!!");
    this.setState({ name: e.target.value });
  };

  handleSubmit = () => {
    console.log("handle submit handle submit...");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* <div>{this.props.jwt}</div> */}
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Chose à faire"
              onChange={() => this.handleChange}
              name="name"
              value={this.state.name}
            />
          </div>
          <div className="form-group text-center">
            <input type="submit" className="btn btn-primary" value={"Éditer"} />
          </div>
        </form>
      </div>
    );
  }
}
export default EditTodoForm;
