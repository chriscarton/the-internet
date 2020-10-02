import React, { Component } from "react";

import { connect } from "react-redux";
import { editTodoSubmit } from "../../actions/todosActions";

import $ from "jquery";

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: ""
    };
  }

  //C'est bien cette méthode qu'il faut utilier et pas componentWillMount
  componentWillReceiveProps(props) {
    this.setState(props.todoToEdit);
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const postData = {
      id: this.state.id,
      name: this.state.name,
      jwt: this.props.jwt
    };

    this.props.editTodoSubmit(postData);

    $("#exampleModal").modal("hide");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Chose à faire"
              onChange={this.handleChange}
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
const mapStateToProps = state => ({
  todos: state.todos.items,
  userIsLogged: state.logins.logged,
  jwt: state.logins.jwt,
  newTodo: state.todos.newTodo,
  todoToEdit: state.todos.todoToEdit
});

export default connect(mapStateToProps, { editTodoSubmit })(EditTodoForm);
