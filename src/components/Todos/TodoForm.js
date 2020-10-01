import React, { Component } from "react";

import { connect } from "react-redux";
import { addTodo } from "../../actions/todosActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const todo = {
      name: this.state.name,
      jwt: this.props.jwt
    };
    //Call action
    this.props.addTodo(todo);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Quelque chose à ajouter ?</h2>
          {/* <div>{this.props.jwt}</div> */}
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Chose à faire"
              onChange={this.handleChange}
              name="name"
            />
          </div>
          <div className="form-group text-center">
            <input
              type="submit"
              className="btn btn-primary"
              placeholder="Ajouter"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newTodo: state.todos.newTodo
});

export default connect(mapStateToProps, { addTodo })(TodoForm);
